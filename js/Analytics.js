// For Curve 1
function generateRandomData(year) {
    var priceRanges = ['0-100', '100-200', '200-300', '300-400', '400-500'];
    var paymentMethods = ['Credit Card', 'PayPal', 'Cash'];

    // Adjust the data based on the selected year
    var cashPercentage = 0.2; // 20% of total sales for Cash
    var totalSales = 1000; // Total sales for all payment methods
    var cashSales = totalSales * cashPercentage;
    var nonCashSales = totalSales * (1 - cashPercentage);

    var data = {
        labels: priceRanges,
        datasets: paymentMethods.map(function(method, index) {
            var sales = priceRanges.map(function() {
                return Math.floor(Math.random() * nonCashSales / 3) + 1;
            });
            if (method === 'Cash') {
                sales = priceRanges.map(function() {
                    return Math.floor(Math.random() * cashSales) + 1;
                });
            }
            return {
                label: method,
                backgroundColor: 'hsla(' + (index * 100) + ', 60%, 50%, 0.7)',
                data: sales
            };
        })
    };

    return data;
}

var selectedYear = '2022'; // Default selected year

// Function to update the chart with the selected year's data
function updateChart(year, chartInstance) {
    var newData = generateRandomData(year);
    chartInstance.data = newData;
    chartInstance.update(); // Refresh the chart
}

// Event listener for when the year selection changes
document.getElementById('yearSelect').addEventListener('change', function() {
    selectedYear = this.value;
    updateChart(selectedYear, stackedBarChart);
});

// Initialize Chart.js
var ctx = document.getElementById('stackedBarChart').getContext('2d');
var stackedBarChart = new Chart(ctx, {
    type: 'bar',
    data: generateRandomData(selectedYear),
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        },
        scales: {
            x: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Price Ranges (USD)'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Sales (in thousands)'
                },
                ticks: {
                    callback: function(value, index, values) {
                        return value + 'K';
                    }
                }
            }
        }
    },
});

//Curve 2

const labels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function generateRandomSalesData() {
    return Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));
}

const salesData = {
    Category1: generateRandomSalesData(),
    Category2: generateRandomSalesData(),
    Category3: generateRandomSalesData(),
    Category4: generateRandomSalesData(),
    Category5: generateRandomSalesData()
};

// Initialize the chart
const ctx3 = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Category Sales',
            data: salesData['Category1'], // Default to Category 1
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 1
        }, {
            label: 'Trend Line',
            data: salesData['Category1'], // Default to Category 1
            type: 'line',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            }
        }
    }
});

// Update the chart when the selected category changes
document.getElementById('productFilter').addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    salesChart.data.datasets[0].data = salesData[selectedCategory];
    salesChart.data.datasets[1].data = salesData[selectedCategory];
    salesChart.update();
});

// Curve 3
// Random data generation
function generateRandomDatapie(numItems) {
    return Array.from({ length: numItems }, () => Math.floor(Math.random() * 100) + 1);
}

// Set up the chart data
const data = {
    labels: [
        "Product Defects or Quality Issues",
        "Wrong Item Received",
        "Unsatisfactory Product Performance",
        "Changed Mind or Dissatisfaction",
        "Better Price or Alternative Found"
    ],
    datasets: [{
        data: generateRandomDatapie(5), // Generate 5 random data points
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#E7E9ED',
            '#4BC0C0'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#E7E9ED',
            '#4BC0C0'
        ]
    }]
};

// Configuration options
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
        }
    }
};

// Initialization of pie chart
const ctx2 = document.getElementById('myPieChart').getContext('2d');
const myPieChart = new Chart(ctx2, {
    type: 'polarArea',
    data: data,
    options: options
});
