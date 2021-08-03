import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ClaimCause = ({ direction }) => {
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
                columnWidth: '15%',
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
            categories: ['Factors inlfuencing health status and contact with health services', 'Disease of respiratory system', 'Disease of the genitourinay system', 'Injury, poisining and certain other consequences of external causes', 'Disease of circulatory system', 'Disease of digestive system']
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
            name: 'Claim Cost ',
            data: [10, 80, 75, 70, 88, 80]
        },
        {
            name: 'No. of Claims',
            data: [95, 90, 30, 10, 62, 20]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
                <CardTitle tag='h4'>Cause of Claims</CardTitle>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={400} />
            </CardBody>
        </Card>
    )
}

export default ClaimCause
