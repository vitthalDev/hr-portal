import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Square } from 'react-feather'

const ActiveAdmissions = () => {
    const donutColors = {
        series1: '#7367F0',
        series2: '#FF9F43',
        series3: '#28C76F',
        series4: '#EA5455'
    }
    const options = {
        legend: {
            show: false,
            position: 'bottom'
        },
        labels: ['Employees', 'Spouse', 'Parents', 'Children'],

        colors: [donutColors.series1, donutColors.series2, donutColors.series3, donutColors.series4],
        dataLabels: {
            enabled: false,
            formatter(val, opt) {
                return `${parseInt(val)}%`
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            fontSize: '2rem',
                            fontFamily: 'Montserrat'
                        },
                        value: {
                            fontSize: '1rem',
                            fontFamily: 'Montserrat',
                            formatter(val) {
                                return `${parseInt(val)}%`
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '1.2rem',
                            label: 'Total :admissions',
                            formatter(w) {
                                return '31'
                            }
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 380
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 320
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        fontSize: '1.5rem'
                                    },
                                    value: {
                                        fontSize: '1rem'
                                    },
                                    total: {
                                        fontSize: '1.5rem'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    }

    const series = [85, 16, 50, 50]

    return (
        <Card>
            <CardHeader>
                <div>
                    <CardTitle className='mb-75' tag='h4' style={{ color: '#645E78' }}>
                        Active Admissions
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='donut' height={300} />
                <div className='d-flex justify-content-between mb-1'>
                    <div className='d-flex align-items-center'>
                        <Square size={15} style={{ color: '#7367F0', backgroundColor: '#7367F0' }} />
                        <span className='font-weight-bold ml-75 mr-25'>Employees</span>
                    </div>
                    <div>
                        <span>5 Lakh</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <div className='d-flex align-items-center'>
                        <Square size={15} style={{ color: '#FFCE76', backgroundColor: '#FFCE76' }} />
                        <span className='font-weight-bold ml-75 mr-25'>Spouse</span>
                    </div>
                    <div>
                        <span>3 Lakh</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <div className='d-flex align-items-center'>
                        <Square size={15} style={{ color: '#FF8585', backgroundColor: '#FF8585' }} />
                        <span className='font-weight-bold ml-75 mr-25'>Children</span>
                    </div>
                    <div>
                        <span>2 Lakh</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <div className='d-flex align-items-center'>
                        <Square size={15} style={{ color: '#65FA9E', backgroundColor: '#65FA9E' }} />
                        <span className='font-weight-bold ml-75 mr-25'>Parents</span>
                    </div>
                    <div>
                        <span>1 Lakh</span>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default ActiveAdmissions
