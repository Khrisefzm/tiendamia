class Product {
  constructor(id, title, colors, price, stock, images, onsale, supplier) {
    this.id = id;
    this.title = title;
    this.colors = colors;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.supplier = supplier;
  }
  get getSupplier() {
    return this._supplier;
  }
  set setSupplier(newName) {
    this._supplier = newName;
  }
  sellUnits(units) {
    if (units > this.stock) console.log("Don't have enough units");
    else this.stock = this.stock - units;
  }
}

const prod1 = new Product(
  1,
  "Mackbook Pro 15'4",
  ["space-gray", "blue"],
  1000.0,
  20,
  ["assets/products/macbook15.png", "assets/mock1.jpg", "assets/mock2.jpg"],
  "50% off",
  "sup1"
);
const prod2 = new Product(
  2,
  "Microphone",
  [""],
  150.0,
  15,
  ["assets/products/microphone.png"],
  "30% off",
  "sup2"
);
const prod3 = new Product(
  3,
  "Bag",
  [""],
  30,
  3,
  ["assets/products/macbook15.png"],
  "",
  "sup3"
);
const prod4 = new Product(
  4,
  "Pencil",
  [""],
  1,
  100,
  ["assets/products/macbook15.png"],
  "",
  "sup2"
);
const prod5 = new Product(
  5,
  "Book",
  [""],
  10,
  25,
  ["assets/products/macbook15.png"],
  "35% off",
  "sup2"
);
const prod6 = new Product(
  6,
  "Pen",
  [""],
  5,
  40,
  ["assets/products/macbook15.png"],
  "",
  "sup2"
);

const products = [prod1, prod2, prod3, prod4, prod5, prod6];
