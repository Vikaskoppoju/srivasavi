const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Civil', 'Mech', 'EEE', 'ECE', 'CSE', 'MBA'],
    datasets: [{
      label:ctx3.labels,
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});