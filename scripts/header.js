function logIn() {
  let isOnline = JSON.parse(localStorage.getItem("isOnline"));
  if (!isOnline) {
    localStorage.setItem("isOnline", JSON.stringify(true));
  } else {
    localStorage.setItem("isOnline", JSON.stringify(false));
  }
  printHeader();
}
function printHeader() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const numberOfProduct = !cart ? 0 : cart.length;
  const showCartNumber = !cart || numberOfProduct == 0 ? "none" : "";

  const isOnline = JSON.parse(localStorage.getItem("isOnline"));
  const profile = !isOnline ? "./assets/user.png" : "./assets/user-check.png";

  const headerTemplate = `
  <div class="search">
    <div class="logo">
      <a href="./index.html">
        <img src="./assets/tiendamia-logo.svg" alt="Logo store" />
      </a>
    </div>
    <div class="form">
      <form>
        <input type="text" placeholder="Search" id="search" />
      </form>
    </div>
    <div class="social">
      <ul>
        <li>
          <a href="./favorites.html">
            <i
              class="fa-solid fa-heart"
              style="color: #ffffff; font-size: 30px"
            ></i>
          </a>
        </li>
        <li>
          <a href="./cart.html" style="text-decoration: none">
            <img
              src="./assets/shopping-cart.svg"
              width="30"
              height="30"
              alt="shopping-cart"
            />
            <div class="cart-number-container" style="display: ${showCartNumber}">${numberOfProduct}</div>
          </a>
        </li>
        <li>
          <img onclick=logIn()
            src=${profile}
            width="30"
            height="30"
            alt="profile"
            style="cursor: pointer"
          />
        </li>
      </ul>
    </div>
  </div>
  `;
  const headerSelector = document.getElementById("header");
  headerSelector.innerHTML = headerTemplate;
}

printHeader();
