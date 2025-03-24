// Get references to the DOM elements
const cartItemsList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const clearCartButton = document.getElementById("clear-cart");

let cart = [];

// Function to update the cart
function updateCart() {
  // Clear the cart items list
  cartItemsList.innerHTML = "";

  // Update the cart display
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  // Update total price
  totalPriceElement.textContent = totalPrice;
}

// Function to add a product to the cart
function addToCart(event) {
  const productName = event.target.getAttribute("data-product");
  const productPrice = parseFloat(event.target.getAttribute("data-price"));

  const product = { name: productName, price: productPrice };
  cart.push(product);

  updateCart();
}

// Function to clear the cart
function clearCart() {
  cart = [];
  updateCart();
}

// Attach event listeners to each "Add to Cart" button
const addButtons = document.querySelectorAll(".add-to-cart");
addButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// Attach event listener to the "Clear Cart" button
clearCartButton.addEventListener("click", clearCart);


class PageNavigator {
  goToSProductPage() {
    window.location.href = 'sproduct.html';  // Navigate to sproduct.html
  }
}

const navigator = new PageNavigator();

// Add event listener to button
document.getElementById('nextPageBtn').addEventListener('click', function() {
  navigator.goToSProductPage();  // Call the method to navigate
});