const cart = JSON.parse(localStorage.getItem("cart")) || [];

function totalPayment(array) {
  let total = 0;
  for (const product of array) {
    total += product.price * product.quantity;
  }
  return total;
}

function changeQuantity(event) {
  const indexFound = cart.findIndex((product) => product.id == event.target.id);
  let cartQuantity = event.target.valueAsNumber;
  cart[indexFound].quantity = cartQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  let subtotal = totalPayment(cart);
  createTotalCard(subtotal);
}

function buy() {
  let subtotal = 0;
  createTotalCard(subtotal);
  const productsSelector = document.getElementById("cartProductsContainer");
  productsSelector.innerHTML = `No hay productos`;
  localStorage.removeItem("cart");
  printHeader();
}

function deleteCard(id) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const indexFound = cart.findIndex((product) => product.id == id);
  cart.splice(indexFound, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  if (!cart || cart.length == 0) {
    createTotalCard(0);
    let selector = document.getElementById("cartProductsContainer");
    selector.innerHTML = `No hay productos`;
  } else {
    let subtotal = cart ? totalPayment(cart) : 0;
    createTotalCard(subtotal);
    printCartCards(cart, "cartProductsContainer");
  }
  printHeader();
}

function createCartCard(product) {
  const { id, title, price, image, color, quantity } = product;
  return `
  <div class="product-card">
    <a href="./details.html?id=${product.id}">
      <img src="${image}" alt="${title}" />
    </a>
    <div>
      <h4><a class="title-anchor" href="./details.html?id=${product.id}"> ${title} </a></h4>
      <p style="margin-top: 5px; margin-bottom: 8px">${color}</p>
      <div class="quantity">
        <input type="number" name="quantity" min="1" id="${id}" value=${quantity} onchange=changeQuantity(event)>
      </div>
      <p class="cost">$ ${price}</p>
    </div>
    <button class="btn-trash" onclick = deleteCard(${id})>
      <i class="fa-solid fa-trash icon-trash"></i>
    </button>
  </div>
  `;
}

function createTotalCard(subtotal) {
  const totalTemplate = `
    <h3 class="summary-title">Resumen del pedido</h3>
    <div class="sumary-total">
      <p>Total</p>
      <p>$ ${subtotal}</p>
    </div>
    <button id="buy" class="summary-btn" onclick=buy()>COMPRAR</button>
    `;

  const totalSelector = document.getElementById("total");
  totalSelector.innerHTML = totalTemplate;
}

function printCartCards(arrayOfProducts, idSelector) {
  let productsCartTemplate = "";
  for (const element of arrayOfProducts) {
    productsCartTemplate = productsCartTemplate + createCartCard(element);
  }
  const cartSelector = document.getElementById(idSelector);
  cartSelector.innerHTML = productsCartTemplate;
}

if (!cart || cart.length == 0) {
  createTotalCard(0);
  let selector = document.getElementById("cartProductsContainer");
  selector.innerHTML = `No hay productos`;
} else {
  let subtotal = cart ? totalPayment(cart) : 0;
  createTotalCard(subtotal);
  printCartCards(cart, "cartProductsContainer");
}
