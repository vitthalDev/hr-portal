import { React, Fragment, useContext } from 'react'
import Avatar from '@components/avatar'
import { Breadcrumb, BreadcrumbItem, Row, Col, Card, CardBody, CardHeader, CardTitle, Media, Table, Progress } from 'reactstrap'
import { Menu, User, Users, Archive, File, CreditCard, Download, MoreVertical } from 'react-feather'
import { Link } from 'react-router-dom'
import { useSkin } from '@hooks/useSkin'
import { Chart } from 'react-apexcharts'
import TableSmall from '../../tables/reactstrap/TableSmall'
import TableServerSide from '../../tables/data-tables/advance/TableServerSide'
import ApexScatterChart from '../../charts/apex/ApexScatterCharts'
import PolarAreaChart from '../../charts/chart-js/ChartjsPolarAreaChart'
import SessionByDevice from '../../ui-elements/cards/analytics/SessionByDevice'
import LineChart from '../../charts/chart-js/ChartjsLineChart'
import CardEmployeesTasks from '../../ui-elements/cards/advance/CardEmployeesTask'
import ProductOrders from '../../ui-elements/cards/analytics/ProductOrders'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { tableSmall } from '../../tables/reactstrap/TableSourceCode'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'

function MainDashboard(props) {
    const [isRtl, setIsRtl] = useRTL()
    const context = useContext(ThemeColors)
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
        trackBgColor = '#e9ecef',
        labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
        tooltipShadow = 'rgba(0, 0, 0, 0.25)',
        gridLineColor = 'rgba(200, 200, 200, 0.2)',
        lineChartPrimary = '#666ee8',
        lineChartDanger = '#ff4961',
        warningColorShade = '#ffe802',
        warningLightColor = '#FDAC34',
        successColorShade = '#28dac6',
        primaryColorShade = '#836AF9',
        infoColorShade = '#299AFF',
        yellowColor = '#ffe800',
        greyColor = '#4F5D70',
        blueColor = '#2c9aff',
        blueLightColor = '#84D0FF',
        greyLightColor = '#EDF1F4'
    return (
        <>
            {/* <Row>
                <Fragment>
                    <Breadcrumb listClassName='breadcrumb-slash'>
                        <BreadcrumbItem>
                            <Menu />
                            <span>Dashboard</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </Row> */}

            <Row>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>136</h2>
                                    <p className='card-text'>Employees</p>
                                </div>
                                <div className='avatar avatar-stats p-50 m-0 bg-light-success'>
                                    <div className='avatar-content'><Users /></div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>04</h2>
                                    <p className='card-text'>Policies</p>
                                </div>
                                <div className='avatar avatar-stats p-50 m-0 bg-light-warning'>
                                    <div className='avatar-content'><Archive /></div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>136</h2>
                                    <p className='card-text'>Claims</p>
                                </div>
                                <div className='avatar avatar-stats p-50 m-0 bg-light-danger'>
                                    <div className='avatar-content'><File /></div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>80</h2>
                                    <p className='card-text'>E card issued</p>
                                </div>
                                <div className='avatar avatar-stats p-50 m-0 bg-light-secondary'>
                                    <div className='avatar-content'><Download /></div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg='8'>
                    <Card>
                        {/* <ApexScatterChart
                            direction={isRtl ? 'rtl' : 'ltr'}
                            primary={colors.primary.main}
                            success={colors.success.main}
                            warning={colors.warning.main}
                        /> */}
                        <LineChart
                            warningColorShade={warningColorShade}
                            lineChartDanger={lineChartDanger}
                            lineChartPrimary={lineChartPrimary}
                            labelColor={labelColor}
                            tooltipShadow={tooltipShadow}
                            gridLineColor={gridLineColor}
                        />
                    </Card>
                </Col>
                {/* <Col lg='4'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Active Admissions</CardTitle>
                            <MoreVertical size={18} className='cursor-pointer' />
                        </CardHeader>
                        <CardBody>
                            <div key='activeAdmissions' className='active-admissions'>
                                <Media>
                                    <div>
                                        <Row className='bg-light-danger'>
                                            <Col lg='7 pl-3'>
                                                <h5>Employees</h5>
                                                <h6>Hospitalised <samp>64</samp></h6>
                                            </Col>
                                            <Col lg='5 pr-3'>
                                                <h6>INR <samp>5,00,000</samp></h6>
                                            </Col>
                                        </Row>
                                        <Row className='bg-light-warning'>
                                            <Col lg='7 pl-3'>
                                                <h5>Spouse</h5>
                                                <h6>Hospitalised <samp>04</samp></h6>
                                            </Col>
                                            <Col lg='5 pr-3'>
                                                <h6>INR <samp>3,00,000</samp></h6>
                                            </Col>
                                        </Row>
                                        <Row className='bg-light-primary'>
                                            <Col lg='7 pl-3'>
                                                <h5>Children</h5>
                                                <h6>Hospitalised <samp>04</samp></h6>
                                            </Col>
                                            <Col lg='5 pr-3'>
                                                <h6>INR <samp>4,00,000</samp></h6>
                                            </Col>
                                        </Row>
                                        <Row className='bg-light-secondary'>
                                            <Col lg='7 pl-3'>
                                                <h5>Parents</h5>
                                                <h6>Hospitalised <samp>04</samp></h6>
                                            </Col>
                                            <Col lg='5 pr-3'>
                                                <h6>INR <samp>5,00,000</samp></h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Media>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Active Health Challenges</CardTitle>
                            <MoreVertical size={18} className='cursor-pointer' />
                        </CardHeader>
                        <CardBody>
                            <Media className='bg-light-danger'>
                                <div className='avatar' style={{ paddingLeft: 10 }}>
                                    <img src='#'>
                                    </img>
                                </div>
                                <Media body>
                                    <h6>Neha</h6>
                                    <small>Leading</small>
                                </Media>
                                <div style={{ paddingRight: 10 }}>
                                    <h5>10</h5>
                                    <small>days left</small>
                                </div>
                                <div className='font-weight-bolder'>
                                    <h5>#FittestWomen</h5>
                                    <small>150 participants</small>
                                </div>
                            </Media>
                            <hr></hr>
                            <Media className='bg-light-warning'>
                                <div className='avatar' style={{ paddingLeft: 10 }}>
                                    <img src='#'>
                                    </img>
                                </div>
                                <Media body>

                                    <h6>Rahul</h6>
                                    <small>Leading</small>
                                </Media>
                                <div style={{ paddingRight: 30 }}>
                                    <h5>03</h5>
                                    <small>days left</small>
                                </div>
                                <div className='font-weight-bolder'>
                                    <h5>#FitIn40</h5>
                                    <small>100 participants</small>
                                </div>
                            </Media>
                            <hr></hr>
                            <Media className='bg-light-primary'>
                                <div className='avatar' style={{ paddingLeft: 10 }}>
                                    <img src='#'>
                                    </img>
                                </div>
                                <Media body>

                                    <h6>Nikhil</h6>
                                    <small>Leading</small>
                                </Media>
                                <div style={{ paddingRight: 20 }}>
                                    <h5>06</h5>
                                    <small>days left</small>
                                </div>
                                <div className='font-weight-bolder'>
                                    <h5>#Running10K</h5>
                                    <small>100 participants</small>
                                </div>
                            </Media>
                            <hr></hr>
                            <Media className='bg-light-secondary'>
                                <div className='avatar' style={{ paddingLeft: 10 }}>
                                    <img src='#'>
                                    </img>
                                </div>
                                <Media body>

                                    <h6>Pooja</h6>
                                    <small>Leading</small>
                                </Media>
                                <div style={{ paddingRight: 30 }}>
                                    <h5>05</h5>
                                    <small>days left</small>
                                </div>
                                <div className='font-weight-bolder'>
                                    <h5>#Fit50</h5>
                                    <small>50 participants</small>
                                </div>
                            </Media>
                        </CardBody>
                    </Card>
                </Col> */}

                <Col lg='4'>
                    {/* <Card>
                        <CardBody>
                            <Row>
                                <Col className='mb-2' md='6' sm='12'>
                                    <h5 style={{ color: 'blue' }}>Employees</h5>
                                    <span style={{ fontSize: 10 }}><i>Hospitalised 10</i></span>

                                </Col>
                                <Col className='mb-2' md='6'>
                                    <Progress className='avg-session-progress mt-25' value='50' />
                                    <h5>5,00,000</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-2' md='6' sm='12'>
                                    <h5 style={{ color: 'orange' }}>Spouse</h5>
                                    <span style={{ fontSize: 10 }}><i>Hospitalised 04</i></span>

                                </Col>
                                <Col className='mb-2' md='6'>
                                    <Progress className='avg-session-progress progress-bar-warning mt-25' value='30' />
                                    <h5>3,00,000</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-2' md='6' sm='12'>
                                    <h5 style={{ color: 'red' }}>Children</h5>
                                    <span style={{ fontSize: 10 }}><i>Hospitalised 04</i></span>

                                </Col>
                                <Col className='mb-2' md='6'>
                                    <Progress className='avg-session-progress progress-bar-danger mt-25' value='40' />
                                    <h5>4,00,000</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='mb-0' md='6' sm='12'>
                                    <h5 style={{ color: 'green' }}>Parents</h5>
                                    <span style={{ fontSize: 10 }}><i>Hospitalised 04</i></span>

                                </Col>
                                <Col className='mb-0' md='6'>
                                    <Progress className='avg-session-progress progress-bar-success mt-25' value='50' />
                                    <h5>5,00,000</h5>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card> */}
                    {/* <CardEmployeesTasks colors={colors} trackBgColor={trackBgColor} /> */}

                    <SessionByDevice
                        primary={context.colors.primary.main}
                        warning={context.colors.warning.main}
                        danger={context.colors.danger.main}
                        success={context.colors.success.main}
                    />
                </Col>
            </Row>

            <Row>
                <Col sm='12'>
                    <Card title='ActiveAdmission' noBody>
                        {/* <CardHeader style={{ marginBottom: -50 }}>
                            <h5>Active Admissions</h5>
                        </CardHeader> */}
                        <CardBody>
                        </CardBody>
                        {/* <TableSmall /> */}
                        <TableServerSide />
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg='4'>
                    <ProductOrders
                        primary={context.colors.primary.main}
                        warning={context.colors.warning.main}
                        danger={context.colors.danger.main}
                    />
                </Col>
                <Col lg='8'>
                    <Card>
                        <CardHeader>
                            <h3>Active Health Challenges</h3>
                        </CardHeader>
                        <CardBody>
                            <Row >
                                <Col className='mb-1' md='6' sm='12'>
                                    <h5 style={{ color: 'blue' }}>#FittestWomen</h5>
                                    <span style={{ fontSize: 10 }}><i>150 Participants</i></span>

                                </Col>
                                <Col className='mb-1' md='6'>
                                    <Row>
                                        <Col lg='6'>
                                            <h6>Neha-leading</h6>
                                            <small><i>(10 days remaning)</i></small>
                                        </Col>
                                        <Col lg='2'>
                                            <Avatar img={avatar2} imgHeight='40' imgWidth='40' />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className='mb-3'>
                                    <Progress className='avg-session-progress mt-25' value='50' />
                                </Col>
                            </Row>
                            <Row >
                                <Col className='mb-1' md='6' sm='12'>
                                    <h5 style={{ color: 'red' }}>#FitIn40</h5>
                                    <span style={{ fontSize: 10 }}><i>100 Participants</i></span>

                                </Col>
                                <Col className='mb-1' md='6'>
                                    <Row>
                                        <Col lg='6'>
                                            <h6>Rahul-leading</h6>
                                            <small><i>(03 days remaning)</i></small>
                                        </Col>
                                        <Col lg='2'>
                                            <Avatar img={avatar1} imgHeight='40' imgWidth='40' />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className='mb-3'>
                                    <Progress className='avg-session-progress  progress-bar-danger mt-25' value='70' />
                                </Col>
                            </Row>
                            <Row >
                                <Col className='mb-1' md='6' sm='12'>
                                    <h5 style={{ color: 'orange' }}>#10KStepsDaily</h5>
                                    <span style={{ fontSize: 10 }}><i>100 Participants</i></span>

                                </Col>
                                <Col className='mb-1' md='6'>
                                    <Row>
                                        <Col lg='6'>
                                            <h6>Rahul-leading</h6>
                                            <small><i>(06 days remaning)</i></small>
                                        </Col>
                                        <Col lg='2'>
                                            <Avatar img={avatar4} imgHeight='40' imgWidth='40' />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className='mb-3'>
                                    <Progress className='avg-session-progress  progress-bar-warning mt-25' value='30' />
                                </Col>
                            </Row>
                            <Row >
                                <Col className='mb-1' md='6' sm='12'>
                                    <h5 style={{ color: 'green' }}>#FitIn50</h5>
                                    <span style={{ fontSize: 10 }}><i>50 Participants</i></span>

                                </Col>
                                <Col className='mb-1' md='6'>
                                    <Row>
                                        <Col lg='6'>
                                            <h6>Pooja-leading</h6>
                                            <small><i>(05 days remaning)</i></small>
                                        </Col>
                                        <Col lg='2'>
                                            <Avatar img={avatar3} imgHeight='40' imgWidth='40' />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className='mb0'>
                                    <Progress className='avg-session-progress  progress-bar-success mt-25' value='90' />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default MainDashboard
