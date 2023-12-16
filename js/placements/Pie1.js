const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Civil', 'Mech', 'EEE', 'ECE', 'CSE', 'MBA'],
    datasets: [{
      label: ctx1.labels,
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