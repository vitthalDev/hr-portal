import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const AgeGroups = ({ info, direction }) => {
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
                barHeight: '15%',
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
            categories: ['45+', '30-45', '18-30', '0-18']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [700000, 350000, 480000, 600000]
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
                        Age Groups
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={310} />
            </CardBody>
        </Card>
    )
}

export default AgeGroups
