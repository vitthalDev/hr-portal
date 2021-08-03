import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ClaimCostAverageRemCash = ({ info, direction }) => {
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
        colors: [columnColors.series1, columnColors.series2],
        // colors: info,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Rembursement', 'Cashless']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        // {
        //     data: [700, 350, 480, 600, 210, 550, 150]
        // }
        {
            name: 'Z India Pvt. Ltd.',
            data: [860000, 950000]
        },
        {
            name: 'Industry',
            data: [730000, 675000]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <CardTitle className='font-weight-bolder' tag='h4'>
                    Average of Claim Cost
                </CardTitle>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={200} />
            </CardBody>
        </Card>
    )
}

export default ClaimCostAverageRemCash
