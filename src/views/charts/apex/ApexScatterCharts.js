import { useState } from 'react'
import Chart from 'react-apexcharts'
import { Download, UserPlus, UserMinus } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button, Row, Col } from 'reactstrap'

const ApexScatterCharts = ({ direction, warning, primary, success }) => {
  const [active, setActive] = useState('daily')

  const options = {
    chart: {
      zoom: {
        enabled: true,
        type: 'xy'
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'start'
    },
    colors: [warning, primary, success],

    xaxis: {
      tickAmount: 10,
      labels: {
        formatter(val) {
          return parseFloat(val).toFixed(1)
        }
      }
    },
    yaxis: {
      opposite: direction === 'rtl'
    }
  }

  const series = [
    {
      name: 'Famliy Floater Plan',
      data: [
        [5.4, 170],
        [5.4, 100],
        [6.3, 170],
        [5.7, 140],
        [5.9, 130],
        [7.0, 150],
        [8.0, 120],
        [9.0, 170],
        [10.0, 190],
        [11.0, 220],
        [12.0, 170],
        [13.0, 230]
      ]
    },
    {
      name: 'Joint health Insurance',
      data: [
        [14.0, 220],
        [15.0, 280],
        [16.0, 230],
        [18.0, 320],
        [17.5, 280],
        [19.0, 250],
        [20.0, 350],
        [20.5, 320],
        [20.0, 320],
        [19.0, 280],
        [17.0, 280],
        [22.0, 300],
        [18.0, 120]
      ]
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
        <Row>
          <CardTitle tag='h5'>Policies</CardTitle>
        </Row>
        <Row className='p-2'>
          <Col lg='3'>
            <div className='row justify-content-center'>
              <h5>Policy plan 1</h5>
              <h6>No. of employees</h6>
            </div>
            <div className='col justify-content-between align-items-center'>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserPlus /><samp>40</samp></div>
              </div>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserMinus /><samp>20</samp></div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='row justify-content-center'>
              <h5>Policy plan 1</h5>
              <h6>No. of employees</h6>
            </div>
            <div className='col justify-content-between align-items-center'>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserPlus /><samp>23</samp></div>
              </div>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserMinus /><samp>10</samp></div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='row justify-content-center'>
              <h5>Policy plan 3</h5>
              <h6>No. of employees</h6>
            </div>
            <div className='col justify-content-between align-items-center'>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserPlus /><samp>18</samp></div>
              </div>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserMinus /><samp>10</samp></div>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <div className='row justify-content-center'>
              <h5>Policy plan 4</h5>
              <h6>No. of employees</h6>
            </div>
            <div className='col justify-content-between align-items-center'>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserPlus /><samp>10</samp></div>
              </div>
              <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                <div className='avatar-content'><UserMinus /><samp>05</samp></div>
              </div>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type='scatter' height={400} />
      </CardBody>
    </Card>
  )
}

export default ApexScatterCharts
