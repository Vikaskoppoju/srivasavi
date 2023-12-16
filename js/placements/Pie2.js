const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Civil', 'Mech', 'EEE', 'ECE', 'CSE', 'MBA'],
    datasets: [{
      label: ctx2.labels,
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