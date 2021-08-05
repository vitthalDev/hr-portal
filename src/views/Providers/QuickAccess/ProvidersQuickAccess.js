import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Users, Archive, File, Download } from 'react-feather'
import processOK from '@src/assets/images/icons/processOK.png'
import verifiedChecked from '@src/assets/images/icons/verifiedChecked.png'
import fileCancelled from '@src/assets/images/icons/fileCancelled.png'
import hourSandCircle from '@src/assets/images/icons/hourSandCircle.png'

function ProvidersQuickAccess(props) {
    return (
        <>
            <Row>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-bolder mb-0'>200</h2>
                                    <p className='card-text'>Providers</p>
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
                                    <h2 className='font-weight-bolder mb-0'>80</h2>
                                    <p className='card-text'>Used</p>
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
                                    <h2 className='font-weight-bolder mb-0'>50</h2>
                                    <p className='card-text'>Hospital</p>
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
                                    <h2 className='font-weight-bolder mb-0'>30</h2>
                                    <p className='card-text'>Labs</p>
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

export default ProvidersQuickAccess
