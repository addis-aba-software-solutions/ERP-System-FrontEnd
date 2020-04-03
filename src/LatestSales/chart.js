// import palette from 'theme/palette';

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'This year',
      backgroundColor: '#00B45A',
      data: [18, 5, 19, 27, 29, 19, 11, 20, 12, 29, 30]
    },
    {
      label: 'Last year',
      backgroundColor: '#EDE388',
      data: [11, 20, 12, 29, 30, 25, 13, 11, 20, 12, 29]
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 345,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: '#11669F',
    backgroundColor: '#F4F4F4',
    titleFontColor: '#000000',
    bodyFontColor: '#11669F',
    footerFontColor: '#11669F'
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 20,
        maxBarThickness: 40,
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
