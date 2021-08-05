import Chart from 'react-apexcharts'
import { ArrowDown } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Badge } from 'reactstrap'

const DepartmentWiseClaims = ({ direction, warning }) => {
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
            categories: ['Accounts', 'IT', 'Marketing', 'GST', 'Income Tax', 'Others']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            data: [200000, 100050, 160000, 300000, 150000, 100000]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start'>
                <div>
                    <CardTitle className='mb-75' tag='h4'>
                        Department Wise Claims
                    </CardTitle>
                </div>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='line' height={350} />
            </CardBody>
        </Card>
    )
}

export default DepartmentWiseClaims
