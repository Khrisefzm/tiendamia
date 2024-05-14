function printHeader() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const numberOfProduct = !cart ? 0 : cart.length;
  const show = !cart || numberOfProduct == 0 ? "none" : "";
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
          <img
            src="./assets/facebook.png"
            width="30"
            height="30"
            alt="facebook"
          />
        </li>
        <li>
          <img
            src="./assets/instagram.png"
            width="30"
            height="30"
            alt="instagram"
          />
        </li>
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
            <div class="cart-number-container" style="display: ${show}">${numberOfProduct}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  `;
  const headerSelector = document.getElementById("header");
  headerSelector.innerHTML = headerTemplate;
}

printHeader();
