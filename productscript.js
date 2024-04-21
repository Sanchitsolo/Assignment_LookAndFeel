const data = {
    users: [
        { UserID: 1, Username: "john_doe", Email: "john@example.com", Password: "pass123", Address: "123 Main Street", Phone: "123-456-7890" },
        { UserID: 2, Username: "alice", Email: "alice@example.com", Password: "alice123", Address: "456 Elm Avenue", Phone: "456-789-0123" },
    ],
    products: [
        { ProductID: 1, Name: "Laptop", Description: "High-performance laptop with SSD storage", Price: 999.99, StockQuantity: 50 },
        { ProductID: 2, Name: "Smartphone", Description: "Latest model smartphone with dual cameras", Price: 799.99, StockQuantity: 100 },
    ],
    products: [
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
    ],

    orders: [
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
    ],

    orderDetails: [
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
    ],

    categories: [
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
    ],

    payments: [
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
    ],

    shippingMethods: [
        { shippingMethodID: 1, orderID: 101, methodName: "Standard Shipping", estimatedDelivery: "5-7 Days", cost: 5.99 },
        { shippingMethodID: 2, orderID: 102, methodName: "Two-Day Shipping", estimatedDelivery: "2 Days", cost: 13.99 },
        { shippingMethodID: 3, orderID: 103, methodName: "Overnight Shipping", estimatedDelivery: "1 Day", cost: 19.99 },
        { shippingMethodID: 4, orderID: 104, methodName: "International Shipping", estimatedDelivery: "10-15 Days", cost: 29.99 },
        { shippingMethodID: 5, orderID: 105, methodName: "Standard Shipping", estimatedDelivery: "5-7 Days", cost: 5.99 }
    ],

    returns: [
        { returnID: 1, orderID: 101, reason: "Defective item" },
        { returnID: 2, orderID: 103, reason: "Item not as described" },
        { returnID: 3, orderID: 104, reason: "Wrong item shipped" },
        { returnID: 4, orderID: 105, reason: "Changed mind" },
        { returnID: 5, orderID: 107, reason: "Better price found elsewhere" }
    ],

    notuseproducts: [
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
    ],

    customers: [
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
    ],

    customerReviews: [
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
    ]
};

function displayData() {
    const tableSelect = document.getElementById("tableSelect");
    const selectedTable = tableSelect.value;
    const tableData = data[selectedTable];

    const tableDataDiv = document.getElementById("tableData");
    tableDataDiv.innerHTML = ""; 

    if (tableData && tableData.length > 0) { // Check if data is available and not empty
        const table = document.createElement("table");
        table.className = "table table-striped"; // Bootstrap table styling

        // Create table header
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th style="color: black;">Select</th>
            ${Object.keys(tableData[0]).map(key => `<th style="color: black;">${key}</th>`).join('')}
            <th style="color: black;">Edit</th>
            <th style="color: black;">Delete</th>
        `;
        table.appendChild(headerRow);

        // Create table rows
        tableData.forEach(rowData => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><input type="checkbox" name="select"></td>
                ${Object.values(rowData).map(value => `<td style="color: black;">${value}</td>`).join('')}
                <td><button onclick="editRow(this)" class="btn btn-light">Edit</button></td>
                <td><button onclick="deleteRow(this)" class="btn btn-light">Delete</button></td>
            `;
            table.appendChild(row);
        });

        tableDataDiv.appendChild(table);
        tableDataDiv.style.display = "block"; // Ensure the table data div is visible
    } else {
        tableDataDiv.textContent = "No data available for the selected table.";
        tableDataDiv.style.display = "block"; // Ensure the table data div is visible
    }
}


function editRow(btn) {
    const row = btn.parentNode.parentNode;
    const cells = row.querySelectorAll('td:not(:first-child)'); 

    cells.forEach(cell => {
        if (cell.contentEditable !== "true") {
            cell.contentEditable = "true";
            cell.style.backgroundColor = "#aaf"; // Highlight the editable cells
        } else {
            cell.contentEditable = "false";
            cell.style.backgroundColor = ""; // Remove highlight
        }
    });

    document.getElementById("saveButton").style.display = "block";
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function savedChanges() {
    const selectedRows = document.querySelectorAll('.selected');
    selectedRows.forEach(row => {
        const cells = row.querySelectorAll('td:not(:first-child)'); 
        cells.forEach(cell => {
            cell.contentEditable = "false";
            cell.style.backgroundColor = ""; // Remove highlight
        });
    });

    document.getElementById("saveButton").style.display = "none";
}

function saveChanges() {
    const selectedRows = document.querySelectorAll('.selected');
    selectedRows.forEach(row => {
        const cells = row.querySelectorAll('td:not(:first-child)');
        cells.forEach(cell => {
            cell.contentEditable = "false";
            cell.style.backgroundColor = ""; // Remove highlight
        });

        // Uncheck the checkbox
        const checkBox = row.querySelector('input[name="select"]');
        checkBox.checked = false;

        // Remove the 'selected' class from the row
        row.classList.remove('selected');
    });

    document.getElementById("saveButton").style.display = "none";
}

document.addEventListener('change', function(e) {
    if (e.target && e.target.name == 'select') {
        const checkBoxes = document.getElementsByName('select');
        checkBoxes.forEach(checkBox => {
            const row = checkBox.closest('tr');
            if (checkBox.checked) {
                row.classList.add('selected');
            } else {
                row.classList.remove('selected');
            }
        });
    }
});
