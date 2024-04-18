
document.addEventListener("DOMContentLoaded", function() {
    const ratings = [5, 4, 3, 4, 5, 4, 3, 5, 4, 3];

    const labels = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]; 
    const counts = [0, 0, 0, 0, 0]; 

    // Count occurrences of each rating
    ratings.forEach(rating => {
        counts[rating - 1]++;
    });

    // Chart configuration
    const ctx = document.getElementById('reviewChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Reviews',
                data: counts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Rating'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Number of Reviews'
                    }
                }
            }
        }
    });
});
