// Function.js

let products = [
  { id: 1, name: 'Laptop', description: 'High-performance laptop with SSD storage', price: 999.99, stockQuantity: 50 },
  { id: 2, name: 'Smartphone', description: 'Latest model smartphone with dual cameras', price: 799.99, stockQuantity: 100 },
  { id: 3, name: 'Headphones', description: 'Noise-canceling headphones with Bluetooth', price: 199.99, stockQuantity: 200 },
  { id: 4, name: 'Smartwatch', description: 'Fitness tracker with heart rate monitor', price: 149.99, stockQuantity: 150 },
  { id: 5, name: 'Tablet', description: 'Lightweight tablet with long battery life', price: 299.99, stockQuantity: 75 },
  { id: 6, name: 'Camera', description: 'DSLR camera with multiple lens options', price: 1499.99, stockQuantity: 30 },
  { id: 7, name: 'Speaker System', description: 'Home theater speaker system with surround sound', price: 499.99, stockQuantity: 40 },
  { id: 8, name: 'Gaming Console', description: 'Next-gen gaming console with 4K capabilities', price: 399.99, stockQuantity: 80 },
  { id: 9, name: 'Wireless Router', description: 'High-speed wireless router for home or office', price: 79.99, stockQuantity: 120 },
  { id: 10, name: 'External Hard Drive', description: 'Portable external hard drive for data backup', price: 129.99, stockQuantity: 100 }
];

function displayProducts() {
  const tableBody = document.querySelector("#productTable tbody");
  tableBody.innerHTML = "";

  products.forEach(product => {
      const row = `
          <tr>
              <td>${product.id}</td>
              <td contenteditable="true">${product.name}</td>
              <td contenteditable="true">${product.description}</td>
              <td contenteditable="true">${product.price}</td>
              <td contenteditable="true">${product.stockQuantity}</td>
              <td>
                  <button onclick="saveEdit(${product.id})">Save</button>
                  <button onclick="deleteProduct(${product.id})">Delete</button>
              </td>
          </tr>
      `;
      tableBody.innerHTML += row;
  });
}

function addProduct() {
  const nameInput = document.getElementById("productName");
  const priceInput = document.getElementById("productPrice");
  const productName = nameInput.value.trim();
  const productPrice = parseFloat(priceInput.value.trim());

  if (productName && !isNaN(productPrice)) {
      const newProduct = {
          id: products.length + 1,
          name: productName,
          description: "", // Add an empty description for now
          price: productPrice,
          stockQuantity: 0 // Add default stock quantity
      };
      products.push(newProduct);
      displayProducts(); // Update the table with the new product
      nameInput.value = "";
      priceInput.value = "";
  } else {
      alert("Please enter valid product name and price.");
  }
}

function saveEdit(id) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
      const nameCell = document.querySelector(`#productTable tbody tr:nth-child(${index + 1}) td:nth-child(2)`);
      const descriptionCell = document.querySelector(`#productTable tbody tr:nth-child(${index + 1}) td:nth-child(3)`);
      const priceCell = document.querySelector(`#productTable tbody tr:nth-child(${index + 1}) td:nth-child(4)`);
      const stockQuantityCell = document.querySelector(`#productTable tbody tr:nth-child(${index + 1}) td:nth-child(5)`);

      const newName = nameCell.innerText.trim();
      const newDescription = descriptionCell.innerText.trim();
      const newPrice = parseFloat(priceCell.innerText.trim());
      const newStockQuantity = parseInt(stockQuantityCell.innerText.trim());

      if (newName && !isNaN(newPrice) && !isNaN(newStockQuantity)) {
          products[index].name = newName;
          products[index].description = newDescription;
          products[index].price = newPrice;
          products[index].stockQuantity = newStockQuantity;
          displayProducts();
      } else {
          alert("Please enter valid product details.");
      }
  }
}

function deleteProduct(id) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
      products.splice(index, 1);
      displayProducts();
  }
}

function suggestProduct() {
  const input = document.getElementById('productName').value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = ''; // Clear previous suggestions

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(input));
  filteredProducts.forEach(product => {
      const suggestion = document.createElement('div');
      suggestion.textContent = product.name;
      suggestion.classList.add('suggestion');
      suggestion.onclick = function() {
          document.getElementById('productName').value = product.name;
          suggestions.innerHTML = ''; // Clear suggestions after selecting
      };
      suggestions.appendChild(suggestion);
  });
}

displayProducts(); // Initialize the table with existing products

// Orders Table Data
let orders = [
    { orderId: 1, userId: 1, orderDate: '2024-04-10 08:30', orderStatus: 'Delivered' },
    { orderId: 2, userId: 2, orderDate: '2024-04-11 09:45', orderStatus: 'In Transit' },
    { orderId: 3, userId: 3, orderDate: '2024-04-12 10:15', orderStatus: 'At Warehouse' },
    { orderId: 4, userId: 4, orderDate: '2024-04-13 11:30', orderStatus: 'Delivered' },
    { orderId: 5, userId: 5, orderDate: '2024-04-14 12:45', orderStatus: 'In Transit' },
    { orderId: 6, userId: 6, orderDate: '2024-04-15 14:00', orderStatus: 'Delivered' },
    { orderId: 7, userId: 7, orderDate: '2024-04-16 15:15', orderStatus: 'At Warehouse' },
    { orderId: 8, userId: 8, orderDate: '2024-04-17 16:30', orderStatus: 'Delivered' },
    { orderId: 9, userId: 9, orderDate: '2024-04-18 17:45', orderStatus: 'In Transit' },
    { orderId: 10, userId: 10, orderDate: '2024-04-19 18:00', orderStatus: 'Delivered' }
];


// OrderDetails Table Data
let orderDetails = [
    { orderDetailID: 1, orderID: 101, productID: 1, quantity: 2, price: 29.99 },
    { orderDetailID: 2, orderID: 101, productID: 2, quantity: 1, price: 9.99 },
    { orderDetailID: 3, orderID: 102, productID: 3, quantity: 4, price: 19.99 },
    { orderDetailID: 4, orderID: 103, productID: 4, quantity: 1, price: 49.99 },
    { orderDetailID: 5, orderID: 104, productID: 5, quantity: 3, price: 5.99 },
    { orderDetailID: 6, orderID: 105, productID: 6, quantity: 2, price: 15.99 },
    { orderDetailID: 7, orderID: 106, productID: 7, quantity: 5, price: 7.99 },
    { orderDetailID: 8, orderID: 107, productID: 8, quantity: 2, price: 12.99 },
    { orderDetailID: 9, orderID: 108, productID: 9, quantity: 6, price: 9.49 },
    { orderDetailID: 10, orderID: 109, productID: 10, quantity: 1, price: 29.49 }
];

// Categories Table Data
let categories = [
  { categoryId: 1, name: 'Electronics', description: 'Gadgets and electronic devices' },
  { categoryId: 2, name: 'Appliances', description: 'Home and kitchen appliances' },
  { categoryId: 3, name: 'Fashion', description: 'Clothing and accessories' },
  { categoryId: 4, name: 'Books', description: 'Books and educational materials' },
  { categoryId: 5, name: 'Sports', description: 'Sports equipment and gear' },
  { categoryId: 6, name: 'Beauty', description: 'Beauty and personal care products' },
  { categoryId: 7, name: 'Toys', description: 'Toys and games for all ages' },
  { categoryId: 8, name: 'Home Decor', description: 'Home decor and furnishings' },
  { categoryId: 9, name: 'Food', description: 'Food and gourmet items' },
  { categoryId: 10, name: 'Automotive', description: 'Automotive accessories and parts' }
];

// ProductCategories Table Data
let productCategories = [
  { productCategoryId: 1, productId: 1, categoryId: 1 },
  { productCategoryId: 2, productId: 2, categoryId: 1 },
  { productCategoryId: 3, productId: 3, categoryId: 1 },
  { productCategoryId: 4, productId: 4, categoryId: 1 },
  { productCategoryId: 5, productId: 5, categoryId: 1 },
  { productCategoryId: 6, productId: 6, categoryId: 1 },
  { productCategoryId: 7, productId: 7, categoryId: 1 },
  { productCategoryId: 8, productId: 8, categoryId: 1 },
  { productCategoryId: 9, productId: 9, categoryId: 1 },
  { productCategoryId: 10, productId: 10, categoryId: 1 }
];

// Function to display Orders table
function displayOrders() {
  const tableBody = document.querySelector("#orderTable tbody");
  tableBody.innerHTML = "";

  orders.forEach(order => {
      const row = `
          <tr>
              <td>${order.orderId}</td>
              <td>${order.userId}</td>
              <td>${order.orderDate}</td>
              <td>${order.orderStatus}</td>
          </tr>
      `;
      tableBody.innerHTML += row;
  });
}

// Function to display OrderDetails table
function displayOrderDetails() {
  const tableBody = document.querySelector("#categoryTable tbody");
  tableBody.innerHTML = "";

  orderDetails.forEach(detail => {
      const row = `
          <tr>
              <td>${detail.orderDetailId}</td>
              <td>${detail.orderId}</td>
              <td>${detail.productId}</td>
              <td>${detail.quantity}</td>
              <td>${detail.price}</td>
          </tr>
      `;
      tableBody.innerHTML += row;
  });
}

// Function to display Categories table
function displayCategories() {
  const tableBody = document.querySelector("#productCategoriesTable tbody");
  tableBody.innerHTML = "";

  categories.forEach(category => {
      const row = `
          <tr>
              <td>${category.categoryId}</td>
              <td>${category.name}</td>
              <td>${category.description}</td>
          </tr>
      `;
      tableBody.innerHTML += row;
  });
}

// Function to display ProductCategories table
function displayProductCategories() {
  const tableBody = document.querySelector("#productCategoriesTable tbody");
  tableBody.innerHTML = "";

  productCategories.forEach(productCategory => {
      const row = `
          <tr>
              <td>${productCategory.productCategoryId}</td>
              <td>${productCategory.productId}</td>
              <td>${productCategory.categoryId}</td>
          </tr>
      `;
      tableBody.innerHTML += row;
  });
}

// Call the display functions
displayOrders();
displayOrderDetails();
displayCategories();
displayProductCategories();

//payments
let payments = [
    { paymentID: 1, orderID: 101, paymentMethod: 'Credit Card', amount: 1899.97, paymentDate: '2024-04-10' },
    { paymentID: 2, orderID: 102, paymentMethod: 'PayPal', amount: 299.98, paymentDate: '2024-04-11' },
    { paymentID: 3, orderID: 103, paymentMethod: 'Credit Card', amount: 799.97, paymentDate: '2024-04-12' },
    { paymentID: 4, orderID: 104, paymentMethod: 'Debit Card', amount: 999.99, paymentDate: '2024-04-13' },
    { paymentID: 5, orderID: 105, paymentMethod: 'Credit Card', amount: 599.97, paymentDate: '2024-04-14' },
    { paymentID: 6, orderID: 106, paymentMethod: 'PayPal', amount: 1299.98, paymentDate: '2024-04-15' },
    { paymentID: 7, orderID: 107, paymentMethod: 'Debit Card', amount: 199.99, paymentDate: '2024-04-16' },
    { paymentID: 8, orderID: 108, paymentMethod: 'Credit Card', amount: 249.99, paymentDate: '2024-04-17' },
    { paymentID: 9, orderID: 109, paymentMethod: 'PayPal', amount: 129.99, paymentDate: '2024-04-18' },
    { paymentID: 10, orderID: 110, paymentMethod: 'Debit Card', amount: 899.97, paymentDate: '2024-04-19' }
];


let payments = [
    // ... (Insert the payment objects array here as shown previously)
];

// Function to display all payments
function displayPayments(paymentsData) {
    const paymentTbody = document.getElementById('paymentTbody');
    paymentTbody.innerHTML = ''; // Clear previous rows

    // Create table rows for each payment
    paymentsData.forEach(payment => {
        let row = paymentTbody.insertRow();
        row.insertCell(0).textContent = payment.paymentID;
        row.insertCell(1).textContent = payment.orderID;
        row.insertCell(2).textContent = payment.paymentMethod;
        row.insertCell(3).textContent = `$${payment.amount.toFixed(2)}`;
        row.insertCell(4).textContent = payment.paymentDate;
    });
}

// Function to filter payments based on payment method
function filterPayments(method) {
    let filteredPayments = method === '' ? payments : payments.filter(payment => payment.paymentMethod === method);
    displayPayments(filteredPayments);
}

// Initialize table with all payments
displayPayments(payments);


let shippingMethods = [
    { shippingMethodID: 1, orderID: 101, methodName: "Standard Shipping", estimatedDelivery: "5-7 Days", cost: 5.99 },
    { shippingMethodID: 2, orderID: 102, methodName: "Two-Day Shipping", estimatedDelivery: "2 Days", cost: 13.99 },
    { shippingMethodID: 3, orderID: 103, methodName: "Overnight Shipping", estimatedDelivery: "1 Day", cost: 19.99 },
    { shippingMethodID: 4, orderID: 104, methodName: "International Shipping", estimatedDelivery: "10-15 Days", cost: 29.99 },
    { shippingMethodID: 5, orderID: 105, methodName: "Standard Shipping", estimatedDelivery: "5-7 Days", cost: 5.99 }
];


let returns = [
    { returnID: 1, orderID: 101, reason: "Defective item" },
    { returnID: 2, orderID: 103, reason: "Item not as described" },
    { returnID: 3, orderID: 104, reason: "Wrong item shipped" },
    { returnID: 4, orderID: 105, reason: "Changed mind" },
    { returnID: 5, orderID: 107, reason: "Better price found elsewhere" }
];

let products = [
    { productID: 1, productName: "Laptop", price: 999.99, description: "A high-performance laptop for gaming and work." },
    { productID: 2, productName: "Smartphone", price: 699.99, description: "Latest model with high-resolution camera." },
    { productID: 3, productName: "Bluetooth Headphones", price: 199.99, description: "Noise-cancelling headphones with long battery life." },
    { productID: 4, productName: "Smart Watch", price: 299.99, description: "Waterproof smartwatch with various health tracking features." },
    { productID: 5, productName: "E-Reader", price: 129.99, description: "Lightweight e-reader with paper-like display." },
    { productID: 6, productName: "Wireless Mouse", price: 49.99, description: "Ergonomic wireless mouse with custom buttons." },
    { productID: 7, productName: "Gaming Console", price: 499.99, description: "Next-gen gaming console with 8K support." },
    { productID: 8, productName: "Tablet", price: 399.99, description: "Portable tablet ideal for work and entertainment." },
    { productID: 9, productName: "Wireless Charger", price: 59.99, description: "Fast-charging wireless charger compatible with multiple devices." },
    { productID: 10, productName: "External Hard Drive", price: 89.99, description: "Compact external hard drive with 2TB capacity." }
];


let customers = [
    { customerID: 1, firstname: "John", lastname: "Doe", email: "john.doe@example.com" },
    { customerID: 2, firstname: "Jane", lastname: "Doe", email: "jane.doe@example.com" },
    { customerID: 3, firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com" },
    { customerID: 4, firstname: "Bob", lastname: "Brown", email: "bob.brown@example.com" },
    { customerID: 5, firstname: "Carol", lastname: "Johnson", email: "carol.johnson@example.com" },
    { customerID: 6, firstname: "Dave", lastname: "Wilson", email: "dave.wilson@example.com" },
    { customerID: 7, firstname: "Eve", lastname: "Davis", email: "eve.davis@example.com" },
    { customerID: 8, firstname: "Frank", lastname: "Miller", email: "frank.miller@example.com" },
    { customerID: 9, firstname: "Grace", lastname: "Taylor", email: "grace.taylor@example.com" },
    { customerID: 10, firstname: "Henry", lastname: "Anderson", email: "henry.anderson@example.com" }
];


let customerReviews = [
    { reviewID: 1, customerID: 1, productID: 5, reviewText: "Great quality, highly recommended!", rating: 5 },
    { reviewID: 2, customerID: 2, productID: 3, reviewText: "Didn't meet my expectations.", rating: 2 },
    { reviewID: 3, customerID: 3, productID: 4, reviewText: "Decent product for the price.", rating: 3 },
    { reviewID: 4, customerID: 4, productID: 1, reviewText: "Amazing experience, will buy again.", rating: 5 },
    { reviewID: 5, customerID: 5, productID: 2, reviewText: "The features are excellent.", rating: 4 },
    { reviewID: 6, customerID: 1, productID: 2, reviewText: "The product stopped working after a week.", rating: 1 },
    { reviewID: 7, customerID: 6, productID: 5, reviewText: "Satisfied with the purchase.", rating: 4 },
    { reviewID: 8, customerID: 7, productID: 3, reviewText: "Product is good, but shipping was delayed.", rating: 3 },
    { reviewID: 9, customerID: 8, productID: 4, reviewText: "I love the features of this product.", rating: 5 },
    { reviewID: 10, customerID: 10, productID: 1, reviewText: "Not worth the price.", rating: 2 }
];


