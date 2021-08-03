import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Row, Col } from 'reactstrap'
import { Download, UserPlus, UserMinus, Archive, Circle } from 'react-feather'
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import man from '@src/assets/images/icons/man.png'
import woman from '@src/assets/images/icons/female.png'
import DoughnutChart from '../chart-js/ChartjsDoughnutChart'

const ChartjsLineChart = ({
  tooltipShadow,
  gridLineColor,
  labelColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary
}) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    backgroundColor: false,
    legend: {
      position: 'top',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 10
      }
    },
    hover: {
      mode: 'label'
    },
    tooltips: {
      // Updated default tooltip UI
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      shadowBlur: 8,
      shadowColor: tooltipShadow,
      backgroundColor: '#fff',
      titleFontColor: '#000',
      bodyFontColor: '#000'
    },
    layout: {
      padding: {
        top: -25,
        bottom: -15,
        left: -15
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true
          },
          gridLines: {
            display: true,
            color: gridLineColor,
            zeroLineColor: gridLineColor
          },
          ticks: {
            fontColor: labelColor
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true
          },
          ticks: {
            stepSize: 100000,
            min: 0,
            max: 500000,
            fontColor: labelColor
          },
          gridLines: {
            display: true,
            color: gridLineColor,
            zeroLineColor: gridLineColor
          }
        }
      ]
    },
    legend: {
      position: 'top',
      align: 'start',
      labels: {
        usePointStyle: true,
        padding: 25,
        boxWidth: 9
      }
    }
  },
    data = {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [8000, 150000, 180000, 270000, 210000, 160000, 160000, 200002, 200065, 210000, 270000, 250005, 290000, 360000, 375000],
          label: 'Family Floater Paln',
          borderColor: lineChartDanger,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        },
        {
          data: [80000, 125000, 105000, 130000, 215000, 195000, 140000, 160000, 230000, 300000, 220000, 170000, 210000, 200000, 280000],
          label: 'Joint Health Insurance',
          borderColor: lineChartPrimary,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: lineChartPrimary,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: '#fff',
          pointHoverBackgroundColor: lineChartPrimary,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: tooltipShadow
        }
        // {
        //   data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
        //   label: 'Africa',
        //   borderColor: warningColorShade,
        //   lineTension: 0.5,
        //   pointStyle: 'circle',
        //   backgroundColor: warningColorShade,
        //   fill: false,
        //   pointRadius: 1,
        //   pointHoverRadius: 5,
        //   pointHoverBorderWidth: 5,
        //   pointBorderColor: 'transparent',
        //   pointHoverBorderColor: '#fff',
        //   pointHoverBackgroundColor: warningColorShade,
        //   pointShadowOffsetX: 1,
        //   pointShadowOffsetY: 1,
        //   pointShadowBlur: 5,
        //   pointShadowColor: tooltipShadow
        // }
      ]
    }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-2' tag='h4'>
            Policies
          </CardTitle>
          {/* <CardSubtitle></CardSubtitle> */}
          <Row style={{ padding: 10, marginBottom: 50 }}>
            <Col lg='3'>
              <Row>
                <Col lg='9' className='row justify-content-center'>
                  <h6 style={{ fontSize: 10 }}>Policy Paln 1</h6>
                  <div>
                    <img src={man} style={{ height: 25, width: 25 }} /><small style={{ color: 'red' }}>40</small>
                    <img src={woman} style={{ height: 25, width: 25 }} /><small style={{ color: 'red' }}>20</small>
                  </div>
                </Col>
                <Col lg='2 ' style={{ marginLeft: -10 }}>
                  <Circle style={{ color: 'red' }} />
                </Col>
              </Row>
            </Col>
            <Col lg='3'>
              <Row>
                <Col lg='9' className='row justify-content-center'>
                  <h6 style={{ fontSize: 10 }}>Policy Paln 2</h6>
                  <div>
                    <img src={man} style={{ height: 25, width: 25 }} /><small style={{ color: 'orange' }}>23</small>
                    <img src={woman} style={{ height: 25, width: 25 }} /><small style={{ color: 'orange' }}>10</small>
                  </div>
                </Col>
                <Col lg='2 ' style={{ marginLeft: -10 }}>
                  <Circle style={{ color: 'orange' }} />
                </Col>
              </Row>
            </Col>
            <Col lg='3'>
              <Row>
                <Col lg='9' className='row justify-content-center'>
                  <h6 style={{ fontSize: 10 }}>Policy Paln 3</h6>
                  <div>
                    <img src={man} style={{ height: 25, width: 25 }} /><small style={{ color: 'blue' }}>18</small>
                    <img src={woman} style={{ height: 25, width: 25 }} /><small style={{ color: 'blue' }}>10</small>
                  </div>
                </Col>
                <Col lg='2 ' style={{ marginLeft: -10 }}>
                  <Circle style={{ color: 'blue' }} />
                </Col>
              </Row>
            </Col>
            <Col lg='3'>
              <Row>
                <Col lg='9' className='row justify-content-center'>
                  <h6 style={{ fontSize: 10 }}>Policy Paln 4</h6>
                  <div>
                    <img src={man} style={{ height: 25, width: 25 }} /><small style={{ color: 'green' }}>10</small>
                    <img src={woman} style={{ height: 25, width: 25 }} /><small style={{ color: 'green' }}>05</small>
                  </div>
                </Col>
                <Col lg='2 ' style={{ marginLeft: -10 }}>
                  <Circle style={{ color: 'green' }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '345px', marginTop: -50 }}>
          <span className='pl-1'>Policy Usage</span>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
