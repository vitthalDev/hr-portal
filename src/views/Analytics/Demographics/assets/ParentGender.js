import { useEffect, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import {
    Card,
    Row,
    Col,
    CardHeader,
    CardTitle,
    CardBody,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap'
import Chart from 'react-apexcharts'
import * as Icon from 'react-feather'

const ParentGender = props => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
    }, [])

    const spouse = {
        chart: {
            toolbar: {
                show: true
            }
        },
        labels: ['Male', 'Female'],
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        comparedResult: [2, -3, 8, -4],
        stroke: { width: 0 },
        colors: [props.primary, props.warning, props.danger, props.success]
    },
        series2 = [58, 42]

    const renderChartInfo = () => {
        return data.chart_info.map((item, index) => {
            const IconTag = Icon[item.icon]
            return (
                <div
                    // key={index}
                    // className={classnames('d-flex justify-content-between', {
                    //   'mb-1': index !== data.chart_info.length - 1
                    // })}
                    className='d-flex justify-content-between mb-1'
                >
                    <div className='d-flex align-items-center'>
                        {/* <IconTag
              size={17}
              className={classnames({
                [item.iconColor]: item.iconColor
              })}
            /> */}
                        <Icon.Square size={15} style={{ color: 'purple' }} />
                        <span className='font-weight-bold ml-75 mr-25'>Employees</span>
                        <span>-58.6%</span>
                        {/* <span>- {item.usage}%</span> */}
                    </div>
                    <div>
                        <span>2%</span>
                        <Icon.ArrowUp size={14} className='ml-25 text-success' />
                        <Icon.ArrowDown size={14} className='ml-25 text-danger' />
                        {/* {item.upDown > 0 ? (
              <Icon.ArrowUp size={14} className='ml-25 text-success' />
            ) : (
              <Icon.ArrowDown size={14} className='ml-25 text-danger' />
            )} */}
                    </div>
                </div>
            )
        })
    }

    return data !== null ? (
        <Card>
            <CardBody>
                <Row style={{ marginTop: -70 }}>
                    <Col md='6' sm='12' className='pl-5' >
                        <h6>Parent</h6>
                        <div>
                            <Icon.Square size={15} color='#FF7575' style={{ backgroundColor: '#FF7575' }} /><span className='pr-1' style={{ fontSize: 10 }}>Male</span><span style={{ fontSize: 12, paddingLeft: 33 }}>-</span><span style={{ fontSize: 12, paddingLeft: 10 }}>58%</span>
                        </div>
                        <div>
                            <Icon.Square size={15} color='#FFBCBC' style={{ backgroundColor: '#FFBCBC' }} /><span className='pr-1' style={{ fontSize: 10 }}>Female</span><span style={{ fontSize: 12, paddingLeft: 20 }}>-</span><span style={{ fontSize: 12, paddingLeft: 10 }}>42%</span>
                        </div>
                    </Col>
                    <Col md='6' sm='12' style={{ marginTop: -10 }}>
                        <Chart className='my-1' options={spouse} series={series2} type='donut' height={100} />
                    </Col>
                </Row>

            </CardBody>
        </Card>
    ) : null
}
export default ParentGender
