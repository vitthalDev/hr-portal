import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CashlessVSRemClaims = ({ direction }) => {
    const columnColors = {
        series1: '#826af9',
        series2: '#d2b0ff',
        bg: '#f8d3ff'
    }

    const options = {
        chart: {
            height: 400,
            type: 'bar',
            stacked: true,
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '25%',
                colors: {
                    backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg],
                    backgroundBarRadius: 10
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        colors: [columnColors.series1, columnColors.series2],
        stroke: {
            show: true,
            colors: ['transparent']
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        fill: {
            opacity: 1
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            name: 'Cashless',
            data: [30, 43, 68, 12, 55, 10, 48, 25, 17, 70, 48, 18]
        },
        {
            name: 'Rembiirsement',
            data: [45, 55, 65, 10, 30, 40, 45, 40, 30, 10, 62, 20]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
                <CardTitle tag='h4'>Cashless vs Rembursement Claims</CardTitle>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={300} />
            </CardBody>
        </Card>
    )
}

export default CashlessVSRemClaims
