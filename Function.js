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
  { orderId: 1, userId: 1, orderDate: '2024-04-10 08:30', totalAmount: 1899.97 },
  { orderId: 2, userId: 2, orderDate: '2024-04-11 09:45', totalAmount: 299.98 },
  { orderId: 3, userId: 3, orderDate: '2024-04-12 10:15', totalAmount: 799.97 },
  { orderId: 4, userId: 4, orderDate: '2024-04-13 11:30', totalAmount: 999.99 },
  { orderId: 5, userId: 5, orderDate: '2024-04-14 12:45', totalAmount: 599.97 },
  { orderId: 6, userId: 6, orderDate: '2024-04-15 14:00', totalAmount: 1299.98 },
  { orderId: 7, userId: 7, orderDate: '2024-04-16 15:15', totalAmount: 199.99 },
  { orderId: 8, userId: 8, orderDate: '2024-04-17 16:30', totalAmount: 249.99 },
  { orderId: 9, userId: 9, orderDate: '2024-04-18 17:45', totalAmount: 129.99 },
  { orderId: 10, userId: 10, orderDate: '2024-04-19 18:00', totalAmount: 899.97 }
];

// OrderDetails Table Data
let orderDetails = [
  { orderDetailId: 1, orderId: 1, productId: 1, quantity: 1 },
  { orderDetailId: 2, orderId: 1, productId: 2, quantity: 2 },
  { orderDetailId: 3, orderId: 2, productId: 3, quantity: 1 },
  { orderDetailId: 4, orderId: 2, productId: 4, quantity: 1 },
  { orderDetailId: 5, orderId: 3, productId: 5, quantity: 3 },
  { orderDetailId: 6, orderId: 4, productId: 6, quantity: 1 },
  { orderDetailId: 7, orderId: 5, productId: 7, quantity: 2 },
  { orderDetailId: 8, orderId: 6, productId: 8, quantity: 1 },
  { orderDetailId: 9, orderId: 7, productId: 9, quantity: 1 },
  { orderDetailId: 10, orderId: 8, productId: 10, quantity: 2 }
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
              <td>${order.totalAmount}</td>
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

