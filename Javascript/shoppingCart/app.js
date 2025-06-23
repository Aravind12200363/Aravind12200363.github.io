let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

// Render product cards
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });
}

// Add product to cart
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  renderCart();
}

// Increment quantity
function increment(id) {
  cart[id]++;
  renderCart();
}

// Decrement quantity
function decrement(id) {
  cart[id]--;
  if (cart[id] === 0) {
    delete cart[id];
  }
  renderCart();
}

// Render cart summary
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartItems.innerHTML = "";

  let total = 0;

  products.forEach((product) => {
    const qty = cart[product.id];
    if (qty) {
      const item = document.createElement("div");
      item.className = "cart-item";
      const subtotal = qty * product.price;
      total += subtotal;

      item.innerHTML = `
        <div>${product.name} - $${product.price} × ${qty} = $${subtotal}</div>
        <div>
          <button onclick="increment(${product.id})">+</button>
          <button onclick="decrement(${product.id})">-</button>
        </div>
      `;
      cartItems.appendChild(item);
    }
  });

  totalDisplay.textContent = `Total: $${total}`;
}

// Initial render
renderProducts();
renderCart();
