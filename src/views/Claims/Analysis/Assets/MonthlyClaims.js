import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const areaColors = {
    series3: 'rgba(115, 103, 240, .2)',
    series2: 'rgba(115, 103, 240, .5)',
    series1: ''
}

const MonthlyClaims = ({ direction }) => {
    const options = {
        chart: {
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            curve: 'straight'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        colors: [areaColors.series3, areaColors.series2, areaColors.series1],
        xaxis: {
            categories: [
                '7/12',
                '8/12',
                '9/12',
                '10/12',
                '11/12',
                '12/12',
                '13/12',
                '14/12',
                '15/12',
                '16/12',
                '17/12',
                '18/12',
                '19/12',
                '20/12'
            ]
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        tooltip: {
            shared: false
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            name: 'Visits',
            data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
        },
        {
            name: 'Clicks',
            data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
        }
        // {
        //     name: 'Sales',
        //     data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
        // }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
                <div>
                    <CardTitle className='mb-75' tag='h4'>
                        Month Wise Claims
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='area' height={300} />
            </CardBody>
        </Card>
    )
}
export default MonthlyClaims
