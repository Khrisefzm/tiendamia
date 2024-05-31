import options from "../data/options.js";

const navOptions = options.navigation;
const footerOptions = options.footer;

const navSelector = document.getElementById("nav");
const navList = document.createElement("ul");
navOptions.forEach((option) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});
navSelector.appendChild(navList);

const footerSelector = document.querySelector("#footer");
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
