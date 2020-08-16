new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Millennials", "Gen Z", "Gen X", "Boomers"],
      datasets: [
        {
          label: "% Percentage",
          backgroundColor: ["grey", "pink","black","#FCE4EC","#FCE373", "#FFFACD"],

          data: [40,35,20,5]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'BNPL Usage in 2019: Market Composition by Generations'
      },
      animation: {
               animateScale: true,
               animateRotate: true
           },
           tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
        	var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue/total) * 100));
          return percentage + "%";
        }
      }
    }
    }
});
