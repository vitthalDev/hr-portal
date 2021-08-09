import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Users, Archive, File, Download } from 'react-feather'
import Avatar from '@components/avatar'
import group from '@src/assets/images/icons/group.png'
import blueMale from '@src/assets/images/icons/blueMale.png'
import redFemale from '@src/assets/images/icons/redFemale.png'
import cloudDownload from '@src/assets/images/icons/cloudDownload.png'

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
                                    <Avatar img={blueMale} />
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
                                    <Avatar img={redFemale} />
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
                                    <img src={cloudDownload} height='30' width='30' />
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
