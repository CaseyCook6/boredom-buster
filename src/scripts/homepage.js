// let epidemicChart = document.getElementById('boredomChart').getContext('2d');
let epidemicChart = document.getElementById('boredomChart');


//Global variables
Chart.defaults.font.size = 20;
Chart.defaults.color = "black";

let lineGraph = new Chart(epidemicChart, {
  type: 'line',
  data: {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: "% of Boredom in the Population",
      data: [
        30,
        40,
        103,
        14,
        0
      ],
      backgroundColor: [
        'black'
      ],
      borderWidth: 4,
      borderColor: 'black'
    }]
  },
  options: {
  }
});



