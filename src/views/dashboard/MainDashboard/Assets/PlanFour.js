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

const PlanFour = props => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
    }, [])

    const employees = {
        chart: {
            toolbar: {
                show: false
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
        series1 = [80, 20]

    // const renderChartInfo = () => {
    //     return data.chart_info.map((item, index) => {
    //         // const IconTag = Icon[item.icon]
    //         return (
    //             <div
    //                 // key={index}
    //                 // className={classnames('d-flex justify-content-between', {
    //                 //   'mb-1': index !== data.chart_info.length - 1
    //                 // })}
    //                 className='d-flex justify-content-between mb-1'
    //             >
    //                 <div className='d-flex align-items-center'>
    //                     {/* <IconTag
    //           size={17}
    //           className={classnames({
    //             [item.iconColor]: item.iconColor
    //           })}
    //         /> */}
    //                     {/* <Icon.Square size={15} style={{ color: 'purple' }} /> */}
    //                     <span className='font-weight-bold ml-75 mr-25'>Employees</span>
    //                     <span>-58.6%</span>
    //                     {/* <span>- {item.usage}%</span> */}
    //                 </div>
    //                 <div>
    //                     <span>2%</span>
    //                     <Icon.ArrowUp size={14} className='ml-25 text-success' />
    //                     <Icon.ArrowDown size={14} className='ml-25 text-danger' />
    //                     {/* {item.upDown > 0 ? (
    //           <Icon.ArrowUp size={14} className='ml-25 text-success' />
    //         ) : (
    //           <Icon.ArrowDown size={14} className='ml-25 text-danger' />
    //         )} */}
    //                 </div>
    //             </div>
    //         )
    //     })
    // }

    return data !== null ? (
        <Chart className='my-1' options={employees} series={series1} type='donut' height={80} />
    ) : null
}
export default PlanFour
