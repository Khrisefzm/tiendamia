function captureText(e) {
  const searchText = e.target.value.trim();
  console.log(searchText);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );
  printCards(filteredProducts, "products");
}

const searchSelector = document.querySelector("#search");

searchSelector.addEventListener("keyup", captureText);
