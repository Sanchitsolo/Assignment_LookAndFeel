const productsData = {
    Product1: [4.0, 4.5, 3.8, 4.2, 4.1, 5.0, 4.0, 4.4, 3.8, 4.2, 2.3, 5.0],
    Product2: [3.5, 4.0, 4.2, 4.0, 4.8, 4.6, 4.0, 4.5, 3.8, 4.2, 4.1, 4.0],
    Product3: [2.8, 3.0, 2.9, 3.2, 3.1, 3.4, 4.0, 4.5, 3.8, 4.2, 4.1, 3.0],
    // More products data can be added here
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Initialize the chart
const ctx = document.getElementById('ratingsChart').getContext('2d');
const ratingsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Ratings',
            data: productsData['Product1'], // Default to Product 1
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                suggestedMin: 1,
                suggestedMax: 5
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Product Ratings Over Time'
            }
        }
    }
});

// Update the chart when the selected product changes
document.getElementById('productFilter').addEventListener('change', (event) => {
    const selectedProduct = event.target.value;
    ratingsChart.data.datasets[0].data = productsData[selectedProduct];
    ratingsChart.data.datasets[0].label = `Ratings for ${selectedProduct}`;
    ratingsChart.update();
});