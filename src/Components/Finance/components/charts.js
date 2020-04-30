
export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
  datasets: [

    {
      label: 'Expenses',
      backgroundColor: '#11669F',
      data: [18, 5, 19, 29, 35, 25, 11, 20, 12, 29, 30, 35]
    },
    {
      label: 'Income',
      backgroundColor: '#CECECE',
      data: [11, 20, 12, 27, 30, 19, 13, 11, 20, 12, 20, 12]
    }

  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: true,
  legend: { display: false },
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 5,
    titleFontColor: '#FFFFFF',
    bodyFontColor: '#FFFFFF',
    footerFontColor: '#11669F'
  },
  layout: { padding: 2 },
  scales: {
    xAxes: [
      {
        cornerRadius: 345,
        barPercentage: 0.5,
        categoryPercentage: 0.5,

        ticks: {
          fontColor: '#11669F'
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        cornerRadius: 100,

        ticks: {
          fontColor: '#11669F',
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: '#F4F4F4',
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: '#F4F4F4'
        }
      }
    ]
  }
};
