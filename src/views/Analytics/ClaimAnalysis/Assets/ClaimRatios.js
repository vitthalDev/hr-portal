import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ClaimRatios = ({ info, direction }) => {
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
        colors: info,
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['YTD Ratio', 'Ratio on Earned Premium', 'EOP Ratio']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [70, 50, 80]
        }
    ]

    return (
        <Card style={{ marginBottom: -10 }}>
            <CardBody>
                <h5>Claim Ratios</h5>
                <Chart options={options} series={series} type='bar' height={150} />
            </CardBody>
        </Card>
    )
}

export default ClaimRatios
