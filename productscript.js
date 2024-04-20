const data = {
    users: [
        { UserID: 1, Username: "john_doe", Email: "john@example.com", Password: "pass123", Address: "123 Main Street", Phone: "123-456-7890" },
        { UserID: 2, Username: "alice", Email: "alice@example.com", Password: "alice123", Address: "456 Elm Avenue", Phone: "456-789-0123" },
    ],
    products: [
        { ProductID: 1, Name: "Laptop", Description: "High-performance laptop with SSD storage", Price: 999.99, StockQuantity: 50 },
        { ProductID: 2, Name: "Smartphone", Description: "Latest model smartphone with dual cameras", Price: 799.99, StockQuantity: 100 },
    ],
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

function saveChanges() {
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
