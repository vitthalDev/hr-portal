import Chart from 'react-apexcharts'
import { Settings } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap'

const PoliciesOverview = props => {
    const options = {
        chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            dropShadow: {
                enabled: true,
                top: 18,
                left: 2,
                blur: 5,
                opacity: 0.2
            },
            offsetX: -10
        },
        stroke: {
            curve: 'smooth',
            width: 4
        },
        grid: {
            borderColor: '#ebe9f1',
            padding: {
                top: -20,
                bottom: 5,
                left: 20
            }
        },
        legend: {
            show: false
        },

        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                inverseColors: false,
                gradientToColors: [props.primary],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        markers: {
            size: 0,
            hover: {
                size: 5
            }
        },
        xaxis: {
            labels: {
                offsetY: 5,
                style: {
                    colors: '#b9b9c3',
                    fontSize: '0.857rem',
                    fontFamily: 'Montserrat'
                }
            },
            axisTicks: {
                show: false
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false
            },
            tickPlacement: 'on'
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                style: {
                    colors: '#b9b9c3',
                    fontSize: '0.857rem',
                    fontFamily: 'Montserrat'
                },
                formatter(val) {
                    return val > 999 ? `${(val / 1000).toFixed(1)}k` : val
                }
            }
        },
        tooltip: {
            x: { show: false }
        }
    },
        series = [
            {
                name: 'Family Floater Plan',
                colors: ['#df87f2'],
                data: [8000, 150000, 180000, 270000, 210000, 160000, 160000, 200002, 200065, 210000, 270000, 250005]
            },
            {
                name: 'Joint Health Insurance',
                data: [80000, 125000, 105000, 130000, 215000, 195000, 140000, 160000, 230000, 300000, 220000, 170000]
            }
        ]
    return (
        <Card>
            <CardHeader className='align-items-start'>
                <Row>
                    {/* <Col md='3'>
                        <CardTitle className='font-weight-medium' tag='h4' style={{ marginRight: 10 }}>
                            Policy Usage
                        </CardTitle>
                    </Col> */}

                    <Col md='12'>
                        <div className='d-flex align-items-center' style={{ marginLeft: 100 }}>
                            <div style={{ paddingRight: 100, marginLeft: -100 }}>
                                <span>Policy Usage</span>
                            </div>
                            <div className='d-flex align-items-center mr-2'>
                                <span className='bullet bullet-info mr-50 cursor-pointer'></span>
                                <span className='font-weight-light' style={{ fontSize: 10 }}>Family Floater Plan</span>
                            </div>
                            <div className='d-flex align-items-center'>
                                <span className='bullet bullet-success mr-50 cursor-pointer'></span>
                                <span className='font-weight-light' style={{ fontSize: 10 }}>Joint Health Insurance</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody className='pb-0'>
                <Chart options={options} series={series} type='line' height={300} />
            </CardBody>
        </Card>
    )
}
export default PoliciesOverview
