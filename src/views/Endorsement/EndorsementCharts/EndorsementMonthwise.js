import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const EndorsementMonthwise = ({ tooltipShadow, gridLineColor, labelColor, successColorShade }) => {
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
                        stepSize: 10,
                        min: 0,
                        max: 100,
                        fontColor: labelColor
                    }
                }
            ]
        }
    },
        data = {
            labels: ['Jan', ' Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: [27, 90, 19, 25, 12, 85, 55, 87, 12, 15, 23, 28, 19],
                    backgroundColor: successColorShade,
                    borderColor: 'transparent',
                    barThickness: 15
                }
            ]
        }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <CardTitle tag='h4'>Endorsement Monthwise</CardTitle>
                {/* <div className='d-flex align-items-center'>
                    <Calendar size={14} />
                    <Flatpickr
                        options={{
                            mode: 'range',
                            defaultDate: ['2019-05-01', '2019-05-10']
                        }}
                        className='form-control flat-picker bg-transparent border-0 shadow-none'
                    />
                </div> */}
            </CardHeader>
            <CardBody>
                <div style={{ height: '400px' }}>
                    <Bar data={data} options={options} height={400} />
                </div>
            </CardBody>
        </Card>
    )
}

export default EndorsementMonthwise

