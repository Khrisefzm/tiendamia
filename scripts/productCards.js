function createCard(product) {
  return `<article class="product-card">
    <a class="product-card" href="./details.html?id=${product.id}">
      <img
        class="product-img"
        src="${product.images[0]}"
        alt="${product.id}"
      />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.colors[0]}</span>
        <div class="product-price-block">
          <span class="price">${product.price}</span>
          <span class="discount">${product.onsale}</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </a>
  </article>`;
}

function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  arrayOfProducts.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");
