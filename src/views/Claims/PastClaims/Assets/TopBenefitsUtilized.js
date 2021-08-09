import { useEffect, useState } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import {
    Card,
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

const TopBenefitsUtilized = props => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('/card/card-analytics/sessions-device').then(res => setData(res.data))
    }, [])

    const options = {
        chart: {
            toolbar: {
                show: true
            }
        },
        labels: ['Employees', 'Spouse', 'Children', 'Parent'],
        dataLabels: {
            enabled: false
        },
        legend: { show: false },
        comparedResult: [2, -3, 8, -4],
        stroke: { width: 0 },
        colors: [props.primary, props.warning, props.danger, props.success]
    },
        series = [42, 32, 16, 10]

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
            <CardHeader className='d-flex flex-md-row flex-column justify-content-md-between justify-content-start align-items-md-center align-items-start'>
                <CardTitle tag='h6'>Top Benefits Utilised</CardTitle>
            </CardHeader>
            <CardBody>
                <Chart className='my-1' options={options} series={series} type='donut' height={270} />
                {/* {renderChartInfo()} */}
                <div className='d-flex justify-content-between'>
                    <Icon.Square size={15} style={{ color: '#826AF9', backgroundColor: '#826AF9' }} /><span className='pr-1'>Employees</span>
                    <Icon.Square size={15} style={{ color: '#9F87FF', backgroundColor: '#9F87FF' }} /><span className='pr-1'>Children</span>
                    <Icon.Square size={15} style={{ color: '#D3B3FF', backgroundColor: '#D3B3FF' }} /><span className='pr-1'>Spouse</span>
                    <Icon.Square size={15} style={{ color: '#F8D3FF', backgroundColor: '#F8D3FF' }} /><span>Parent</span>
                </div>

            </CardBody>
        </Card>
    ) : null
}
export default TopBenefitsUtilized
