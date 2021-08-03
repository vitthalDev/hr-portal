import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Users, Archive, File, Download } from 'react-feather'
import processOK from '@src/assets/images/icons/processOK.png'
import verifiedChecked from '@src/assets/images/icons/verifiedChecked.png'
import fileCancelled from '@src/assets/images/icons/fileCancelled.png'
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
                                    <img src={processOK} />
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
                                    <img src={verifiedChecked} />
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
                                    <img src={fileCancelled} />
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
                                <div>
                                    <img src={hourSandCircle} />
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
