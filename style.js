let cartCount = 0;
const cartCountDisplay = document.getElementById("cart-count");
const cartList = document.getElementById("cart-list");

function addToCart(productName, price) {
  cartCount++;
  cartCountDisplay.textContent = cartCount;

  const listItem = document.createElement("li");
  listItem.textContent = productName + " - $" + price;
  cartList.appendChild(listItem);
}