import { useState } from 'react'
import Chart from 'react-apexcharts'
import { Card, CardHeader, CardTitle, CardBody, ButtonGroup, Button } from 'reactstrap'

const OverallClaims = ({ direction, warning, primary, success }) => {
    const [active, setActive] = useState('daily')

    const options = {
        chart: {
            zoom: {
                enabled: true,
                type: 'xy'
            },
            parentHeightOffset: 0,
            toolbar: {
                show: false
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'start'
        },
        colors: [warning, primary, success],

        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            opposite: direction === 'rtl'
        }
    }

    const series = [
        {
            name: 'Health Cover Claims',
            data: [344, 343, 254, 235, 287, 123, 400, 234, 221, 323, 123, 344]
        },
        {
            name: 'Life Cover Claims',
            data: [244, 313, 224, 285, 297, 193, 240, 234, 231, 353, 223, 324]
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
                <CardTitle tag='h4'>Overall No. of Claims</CardTitle>
            </CardHeader>
            <CardBody>
                <Chart options={options} series={series} type='scatter' height={400} />
            </CardBody>
        </Card>
    )
}

export default OverallClaims
