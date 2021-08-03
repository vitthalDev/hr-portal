import Chart from 'react-apexcharts'
import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const CoveredEmployees = ({ info, direction }) => {
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
            categories: ['56-65 Yrs', '46-55 Yrs', '36-45 Yrs', '26-35 Yrs', '19-25 Yrs']
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
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <h5>Age-Band wise distribution of covered employees</h5>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='bar' height={200} width={350} />
            </CardBody>
        </Card>
    )
}

export default CoveredEmployees
