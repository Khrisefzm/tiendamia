const navSelector = document.getElementById("nav");

const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Cómo Comprar", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
];

const navList = document.createElement("ul");
options.forEach((option) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});
navSelector.appendChild(navList);

const footerSelector = document.querySelector("#footer");
const footerOptions = [
  {
    title: "Ofertas de la semana",
    linkTo: "./outlet.html",
    opts: ["Laptops", "Audio", "Auticulares"],
  },
  {
    title: "Cómo comprar",
    linkTo: "./outlet.html",
    opts: ["Formas de pago", "Envío", "Devoluciones"],
  },
  {
    title: "Costos y tarifas",
    linkTo: "./outlet.html",
    opts: ["Impuestos", "Facturación"],
  },
  {
    title: "Mis pedidos",
    linkTo: "./outlet.html",
    opts: ["Pedir Nuevamente", "Lista de deseos"],
  },
  { title: "Garantia de entrega", linkTo: "./outlet.html", opts: [] },
];

for (const option of footerOptions) {
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("col");

  const ul = document.createElement("ul");

  const mainListItem = document.createElement("li");
  mainListItem.classList.add("col-main-item");
  const mainAnchor = document.createElement("a");
  mainAnchor.href = option.linkTo;
  mainAnchor.textContent = option.title;
  mainListItem.appendChild(mainAnchor);
  ul.appendChild(mainListItem);

  for (const opt of option.opts) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#"; // You can set the href value if needed
    anchor.textContent = opt;
    listItem.appendChild(anchor);
    ul.appendChild(listItem);
  }
  columnDiv.appendChild(ul);
  footerSelector.appendChild(columnDiv);
}
