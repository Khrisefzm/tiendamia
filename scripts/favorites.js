const favorites = JSON.parse(localStorage.getItem("favorites"));
function deleteCard(id) {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const indexFound = favorites.findIndex((product) => product.id == id);
  favorites.splice(indexFound, 1);
  if (favorites.length == 0) {
    let selector = document.getElementById("favoritesProductsContainer");
    selector.innerHTML = `No hay productos`;
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  if (!favorites || favorites.length == 0) {
    let selector = document.getElementById("favoritesProductsContainer");
    selector.innerHTML = `No hay productos`;
  } else {
    printFavoritesCards(favorites, "favoritesProductsContainer");
  }
  printHeader();
}

function createFavoritesCard(product) {
  const { id, title, price, image, color } = product;
  return `
  <div class="product-card">
    <a href="./details.html?id=${product.id}">
      <img src="${image}" alt="${title}" />
    </a>
    <div>
      <h4><a class="title-anchor" href="./details.html?id=${product.id}"> ${title} </a></h4>
      <p style="margin-top: 5px; margin-bottom: 8px">${color}</p>
      <p class="cost">$ ${price}</p>
    </div>
    <button class="btn-trash" onclick = deleteCard(${id})>
      <i class="fa-solid fa-trash icon-trash"></i>
    </button>
  </div>
  `;
}

function printFavoritesCards(arrayOfProducts, idSelector) {
  let productsfavoritesTemplate = "";
  for (const element of arrayOfProducts) {
    productsfavoritesTemplate =
      productsfavoritesTemplate + createFavoritesCard(element);
  }
  const favoritesSelector = document.getElementById(idSelector);
  favoritesSelector.innerHTML = productsfavoritesTemplate;
}

if (!favorites || favorites.length == 0) {
  let selector = document.getElementById("favoritesProductsContainer");
  selector.innerHTML = `No hay productos`;
} else {
  printFavoritesCards(favorites, "favoritesProductsContainer");
}
