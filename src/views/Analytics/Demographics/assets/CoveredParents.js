import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const CoveredParents = ({ info, direction }) => {
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
            categories: ['70 Yrs & above', '66-70 Yrs', '56-65 Yrs', '46-55 Yrs', '36-45 Yrs']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [70, 50, 80, 60, 20, 50]
        }
    ]

    return (
        <Card style={{ marginBottom: -10 }}>
            <CardBody>
                <h5>Age-Band wise distribution of covered parents</h5>
                <Chart options={options} series={series} type='bar' height={200} />
            </CardBody>
        </Card>
    )
}

export default CoveredParents
