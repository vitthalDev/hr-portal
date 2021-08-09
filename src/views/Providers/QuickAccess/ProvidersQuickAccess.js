import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'
import { Users, Archive, File, Download } from 'react-feather'
import transmitter from '@src/assets/images/icons/transmitter.png'
import hospitalBed from '@src/assets/images/icons/hospitalBed.png'
import hospital from '@src/assets/images/icons/hospital.png'
import microscope from '@src/assets/images/icons/microscope.png'

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
                                    <img src={transmitter} />
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
                                    <img src={hospitalBed} />
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
                                    <img src={hospital} />
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
                                    <img src={microscope} />
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
