import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'

const MonthWiseClaims = ({ direction, warning }) => {
    const options = {
        chart: {
            zoom: {
                enabled: false
            },
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },

        markers: {
            strokeWidth: 7,
            strokeOpacity: 1,
            strokeColors: ['#fff'],
            colors: [warning]
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        colors: [warning],
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        tooltip: {
            custom(data) {
                return `<div class='px-1 py-50'>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [180000, 270000, 250000, 700000, 900000, 200000, 150000, 160000, 100000, 100050, 100000, 500000]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <div>
                    <CardTitle className='mb-75' tag='h4'>
                        Monthwise Claims
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='line' height={290} />
            </CardBody>
        </Card>
    )
}

export default MonthWiseClaims
