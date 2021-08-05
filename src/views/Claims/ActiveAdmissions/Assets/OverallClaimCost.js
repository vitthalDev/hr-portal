import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import OverallClaims from './OverallClaims'

const OverallClaimsCost = ({ info, direction }) => {
    const columnColors = {
        series1: '#826af9',
        series2: '#d2b0ff',
        bg: '#f8d3ff'
    }

    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '30%',
                endingShape: 'rounded'
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        // colors: [columnColors.series1, columnColors.series2],
        colors: info,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [766700, 350343, 476580, 600654, 210234, 552340, 150443]
        }
        // {
        //   name: 'Apple',
        //   data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180]
        // },
        // {
        //   name: 'Samsung',
        //   data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20]
        // }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <div>
                    <CardTitle className='font-weight-bolder' tag='h4'>
                        Overall Claim Cost
                    </CardTitle>
                </div>
                <div className='d-flex align-items-center mt-md-0 mt-1'>
                    <Calendar size={17} />
                    <span>20210-08-05 to 2021-08-05</span>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={400} />
            </CardBody>
        </Card>
    )
}

export default OverallClaimsCost
