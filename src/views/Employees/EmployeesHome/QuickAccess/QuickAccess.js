import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Users, Archive, File, Download } from 'react-feather'
import Avatar from '@components/avatar'
import group from '@src/assets/images/icons/group.png'
import male3 from '@src/assets/images/icons/male3.png'
import female3 from '@src/assets/images/icons/female3.png'
import cloudDownload from '@src/assets/images/icons/cloudDownload.png'
import hourSandCircle from '@src/assets/images/icons/hourSandCircle.png'

function EmployeesQuickAccess(props) {
    return (
        <>
            <Row>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>136</h2>
                                    <p className='card-text'>Employees</p>
                                </div>
                                <div>
                                    <img src={group} />
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
                                    <h2 className='font-weight-bolder mb-0'>90</h2>
                                    <p className='card-text'>Male</p>
                                </div>
                                <div>
                                    <Avatar img={male3} />
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
                                    <h2 className='font-weight-bolder mb-0'>46</h2>
                                    <p className='card-text'>Female</p>
                                </div>
                                <div>
                                    <Avatar img={female3} />
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
                                    <p className='card-text'>E-Card Issued</p>
                                </div>
                                <div className='avatar avatar-stats p-50 m-0 bg-light-success'>
                                    <img src={cloudDownload} width='35' height='30' />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default EmployeesQuickAccess
