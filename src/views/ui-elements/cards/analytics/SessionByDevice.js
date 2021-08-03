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

const SessionByDevice = props => {
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
      enabled: true
    },
    legend: { show: false },
    comparedResult: [2, -3, 8, -4],
    stroke: { width: 0 },
    colors: [props.primary, props.warning, props.danger, props.success]
  },
    series = [52, 32, 6, 10]

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
      <CardHeader className='align-items-end'>
        <CardTitle tag='h4'>Active Admissions</CardTitle>
        <UncontrolledDropdown className='chart-dropdown'>
          <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
            Last 7 days
          </DropdownToggle>
          <DropdownMenu right>
            {data.last_days.map(item => (
              <DropdownItem className='w-100' key={item}>
                {item}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody>
        <Chart className='my-1' options={options} series={series} type='donut' height={280} />
        <span>Total Admission: 100</span>
        {/* {renderChartInfo()} */}
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Icon.Square size={15} className='bg-light-primary' />
            <span className='font-weight-bold ml-75 mr-25'>Employees</span>
          </div>
          <div>
            <span>5 Lakh</span>
          </div>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Icon.Square size={15} className='bg-light-warning' />
            <span className='font-weight-bold ml-75 mr-25'>Spouse</span>
          </div>
          <div>
            <span>3 Lakh</span>
          </div>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Icon.Square size={15} className='bg-light-danger' />
            <span className='font-weight-bold ml-75 mr-25'>Children</span>
          </div>
          <div>
            <span>2 Lakh</span>
          </div>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <div className='d-flex align-items-center'>
            <Icon.Square size={15} className='bg-light-success' />
            <span className='font-weight-bold ml-75 mr-25'>Parents</span>
          </div>
          <div>
            <span>1 Lakh</span>
          </div>
        </div>
      </CardBody>
    </Card>
  ) : null
}
export default SessionByDevice
