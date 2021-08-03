import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ClaimCostAverageClaimSummary = ({ info, direction }) => {
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
            categories: ['Grand Total', '150K to Below 200K', '75K to Below 100K', '50K to Below 75K', '25K to Below 50K', '10K to Below 25K', '<10K']
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
            data: [756000, 550000, 546009, 560000, 860000, 950000]
        },
        {
            name: 'Z India Pvt. Ltd.',
            data: [564000, 730000, 675000, 750000, 876500]
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
                <Chart options={options} series={series} type='bar' height={400} />
            </CardBody>
        </Card>
    )
}

export default ClaimCostAverageClaimSummary
