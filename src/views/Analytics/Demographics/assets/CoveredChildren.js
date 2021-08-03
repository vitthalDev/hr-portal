import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const CoveredChildren = ({ info, direction }) => {
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
            categories: ['419-25 Yrs', '0-18 Yrs']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [70, 50]
        }
    ]

    return (
        <Card style={{ marginBottom: -10 }}>
            <CardBody>
                <h5>Age-band distribution of covered children </h5>
                <Chart options={options} series={series} type='bar' height={150} />
            </CardBody>
        </Card>
    )
}

export default CoveredChildren
