const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

const favoriteArray = JSON.parse(localStorage.getItem("favorites")) || [];
const favoriteIcon = {
  icon: favoriteArray.find((product) => product.id == id)
    ? '<i class="fa-solid fa-heart" style="color: #fb0404;"></i>'
    : '<i class="fa-regular fa-heart" style="color: #000000;"></i>',
};

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = selectedSrc;
}

function saveProduct(id) {
  fetchProducts().then((data) => {
    const productSelected = data.products.find((product) => product.id == id);
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    const { title, price, images } = productSelected;
    let color = document.querySelector("#colorSelected").value;
    let quantity = parseInt(document.querySelector("#quantitySelected").value);
    const product = {
      id,
      title,
      price,
      image: images[0],
      color,
      quantity,
    };
    const indexFound = cart.findIndex((product) => product.id == id);
    if (indexFound >= 0) {
      let cartQuantity = cart[indexFound].quantity + product.quantity;
      cart[indexFound].quantity = cartQuantity;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    printHeader();
  });
}

function addfavorite(id, productSelected) {
  fetchProducts().then((data) => {
    const productSelected = data.products.find((product) => product.id == id);
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    let color = document.querySelector("#colorSelected").value;
    const { title, price, images } = productSelected;
    const product = {
      id,
      title,
      price,
      image: images[0],
      color,
    };
    const indexFound = favorites.findIndex((product) => product.id == id);
    if (indexFound >= 0) {
      favoriteIcon.icon =
        '<i class="fa-regular fa-heart" style="color: #000000;"></i>';
      favorites.splice(indexFound, 1);
    } else {
      favoriteIcon.icon =
        '<i class="fa-solid fa-heart" style="color: #fb0404;"></i>';
      favorites.push(product);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));

    printDetails(id, data.products);
  });
}

function printDetails(id, arrayOfProducts) {
  id = parseInt(id);

  if (!Array.isArray(arrayOfProducts)) {
    console.warn("Expected an array but got:", arrayOfProducts);
    return false;
  }

  const product = arrayOfProducts.find((product) => product.id === id);
  const { title, price, description, images, colors } = product;
  console.log(product);
  const detailsTemplate = `
  <div class="columns-container">
    <div class="product-images-block">
            ${images
              .map(
                (each) =>
                  `<div class="thumbnail-container" onclick=changeMini(event)>
                    <img src="${each}" alt="mini" />
                  </div>`
              )
              .join("")}
      <img id="bigImg" class="main-image" src="${images[0]}" alt="mackbook" />
    </div>
    <div class="product-description-block">
      <h1 class="title">${title}</h1>
      <form class="selector">
        <fieldset>
          <label class="label" for="color">Color</label>
          <select id="colorSelected" type="text" placeholder="Selecciona un color">
         ${colors
           .map((each) => `<option value=${each}>${each}</option>`)
           .join("")}
            </select>
        </fieldset>
      </form>
      <div class="description">
        <p>Descripción:</p>
        <p>
          Su procesador Apple M2 Pro de 10 núcleos, te permitirá ejecutar
          programas variados y procesos indispensables para desenvolverte
          en el día a día, ya sea en tu trabajo o en los momentos de ocio
          en tu hogar.
        </p>
      </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Precio:</span>
        <h2 class="checkout-total-price">$ ${price}</h2>
        <p class="checkout-description">
          Incluye impuestos
        </p>
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon"
              ><img src="./assets/truck.png" alt="Truck"
            /></span>
            <span class="policy-desc"
              >Agrega el producto al carrito para conocer los costos de
              envío</span
            >
          </li>
          <li>
            <span class="policy-icon"
              ><img src="./assets/plane.png" alt="Plane"
            /></span>
            <span class="policy-desc"
              >Recibí aproximadamente entre 10 y 15 días hábiles,
              seleccionando envío normal</span
            >
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input id="quantitySelected" type="number" value="1"/>
            <a href="./cart.html" class="btn-primary">
              <button class="btn-primary" onclick=saveProduct(${id})>Comprar</button>
            </a>
            <button class="btn-favorite" onclick=addfavorite(${id})>
              ${favoriteIcon.icon}
            </button>
          </div>
          <div class="bottom">
            <button class="btn-outline" onclick=saveProduct(${id})>Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sales-block">
    <h2>Productos destacados</h2>
    <article class="product-card">
      <a href="./details.html">
        <img
          class="product-img"
          src="assets/products/macbook15.png"
          alt="Macbook Pro"
        />
        <div class="product-info">
          <span class="product-title">Macbook Pro 15'4</span>
          <span class="product-description">Space Gray</span>
          <div class="product-price-block">
            <span class="price">$750.000</span>
            <span class="discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    </article>
    <article class="product-card">
      <a href="./details.html">
        <img
          class="product-img"
          src="assets/products/macbook15.png"
          alt="Macbook Pro"
        />
        <div class="product-info">
          <span class="product-title">Macbook Pro 15'4</span>
          <span class="product-description">Space Gray</span>
          <div class="product-price-block">
            <span class="price">$750.000</span>
            <span class="discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    </article>
    <article class="product-card">
      <a href="./details.html">
        <img
          class="product-img"
          src="assets/products/macbook15.png"
          alt="Macbook Pro"
        />
        <div class="product-info">
          <span class="product-title">Macbook Pro 15'4</span>
          <span class="product-description">Space Gray</span>
          <div class="product-price-block">
            <span class="price">$750.000</span>
            <span class="discount">50% Off</span>
          </div>
          <div class="product-tax-policy">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </a>
    </article>
  </div>
  `;
  const detailsSelector = document.querySelector("#details");
  detailsSelector.innerHTML = detailsTemplate;
}

fetchProducts().then((data) => {
  let products = data.products;
  printDetails(id, products);
});
