document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();
});
let products;

async function fetchProducts() {
  try {
    const response = await fetch("../data/products.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching products", err);
  }
}
