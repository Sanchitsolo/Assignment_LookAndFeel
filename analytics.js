// For Curve 1
// Function to generate random sales data
function generateRandomSalesData() {
    let salesData = [];
    for (let i = 0; i < 10; i++) {
      // Generate a random number between 0 and 100 for sales data
      salesData.push(Math.floor(Math.random() * 101));
    }
    return salesData;
  }
  
  const quarterLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  
  // Function to update the chart with the selected product's data
  function updateChart(productSalesData, chartInstance) {
    chartInstance.data.labels = quarterLabels; // Generate labels 1 to 500
    chartInstance.data.datasets[0].data = productSalesData; // Update the dataset for Dataset 1
    chartInstance.update(); // Refresh the chart
  }
  
  // Event listener for when the product selection changes
  document.getElementById('productSelect').addEventListener('change', function() {
    const productSalesData = generateRandomSalesData();
    updateChart(productSalesData, myLineChart);
  });
  
  // Initialize Chart.js
  var ctx = document.getElementById('myChart').getContext('2d');
  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: [], // Labels will be set when updating the chart
          datasets: [{
              label: 'Product Sales',
              data: [], // Initialize with empty data; will be populated when a product is selected
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Observation Number'
                  }
              }],
              yAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Sales'
                  },
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

// For Curve 2
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
