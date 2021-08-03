import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CompositionMembers = ({ tooltipShadow, gridLineColor, labelColor, successColorShade }) => {
    const options = {
        elements: {
            rectangle: {
                borderWidth: 2,
                borderSkipped: 'bottom'
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
            display: false
        },
        tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: tooltipShadow,
            backgroundColor: '#fff',
            titleFontColor: '#000',
            bodyFontColor: '#000'
        },
        scales: {
            xAxes: [
                {
                    display: true,
                    gridLines: {
                        display: true,
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    },
                    scaleLabel: {
                        display: false
                    },
                    ticks: {
                        fontColor: labelColor
                    }
                }
            ],
            yAxes: [
                {
                    display: true,
                    gridLines: {
                        color: gridLineColor,
                        zeroLineColor: gridLineColor
                    },
                    ticks: {
                        stepSize: 100,
                        min: 0,
                        max: 400,
                        fontColor: labelColor
                    }
                }
            ]
        }
    },
        data = {
            labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12'],
            datasets: [
                {
                    data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
                    backgroundColor: successColorShade,
                    borderColor: 'transparent',
                    barThickness: 15
                }
            ]
        }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle tag='h4'>Composition of covered members</CardTitle>
            </CardHeader>
            <CardBody>
                <div style={{ height: '500px' }}>
                    <Bar data={data} options={options} height={500} />
                </div>
            </CardBody>
        </Card>
    )
}

export default CompositionMembers
