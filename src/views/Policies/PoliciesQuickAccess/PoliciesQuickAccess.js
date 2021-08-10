import { React, Fragment, useState } from 'react'
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, CustomInput } from 'reactstrap'
import { Users, Archive, File, Download, ChevronDown } from 'react-feather'
import fileSheild from '@src/assets/images/icons/fileSheild.png'
import heartCover from '@src/assets/images/icons/heartCover.png'
import lifeCover from '@src/assets/images/icons/lifeCover.png'
import addExtra from '@src/assets/images/icons/addExtra.png'

function PoliciesQuickAccess(props) {
    const [basicModal, setBasicModal] = useState(false)
    const [requestPolicies, setRequestPolicies] = useState(false)
    const [centeredModal, setCenteredModal] = useState(false)
    return (
        <>
            <Row>
                <Col lg='3' sm='4'>
                    <Card>
                        <CardBody>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>06</h2>
                                    <p className='card-text' style={{ color: '#625F6E' }}>No. of Policies</p>
                                </div>
                                <div>
                                    <img src={fileSheild} />
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
                                    <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>03</h2>
                                    <p className='card-text' style={{ color: '#625F6E' }}>Health Cover</p>
                                </div>
                                <div>
                                    <img src={heartCover} />
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
                                    <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>03</h2>
                                    <p className='card-text' style={{ color: '#625F6E' }}>Life Cover</p>
                                </div>
                                <div>
                                    <img src={lifeCover} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' sm='4'>
                    <Card style={{ paddingBottom: 8, cursor: 'pointer' }}>
                        <CardBody onClick={() => setRequestPolicies(!requestPolicies)}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h5 className='font-weight-bold mb-0 text-primary'>Request Policies</h5>
                                </div>
                                <div>
                                    <img src={addExtra} />
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <div>
                <div className='vertically-centered-modal'>
                    <Modal isOpen={requestPolicies} toggle={() => setRequestPolicies(!requestPolicies)} className='modal-dialog-centered'>
                        <ModalHeader toggle={() => setRequestPolicies(!requestPolicies)}>Request New Policy</ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md='6'>
                                    <h5 style={{ paddingTop: 10 }}>Policy</h5>
                                </Col>
                                <Col md='6'>
                                    <Input style={{ width: 230, marginLeft: -15 }} type='text' id='policy' placeholder='Rs' />
                                </Col>
                            </Row>
                            <Row className='d-flex justify-content-space-between pt-2'>
                                <Col xl='9'>
                                    <h5 >Health Cover</h5>
                                    <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                        <li style={{ paddingBottom: 5 }}>OPD</li>
                                        <li style={{ paddingBottom: 5 }}>Cashless</li>
                                        <li style={{ paddingBottom: 5 }}>HomeServices</li>
                                        <li>Medicine claim</li>
                                    </ul>
                                </Col>
                                <Col className='justify-content-start'>
                                    <CustomInput type='radio' id='healthCoverage' name='healthCoverage' />
                                    <div style={{ paddingTop: 10 }}>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='a'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='b'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='c'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='d'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='d-flex justify-content-space-between pt-2'>
                                <Col xl='9'>
                                    <h5 >Life Cover</h5>
                                    <ul style={{ listStyle: 'none', marginLeft: -40, paddingTop: 10 }}>
                                        <li style={{ paddingBottom: 5 }}>Accident</li>
                                        <li style={{ paddingBottom: 5 }}>Cashless</li>
                                        <li style={{ paddingBottom: 5 }}>HomeServices</li>
                                        <li>Medicine claim</li>
                                    </ul>
                                </Col>
                                <Col className='justify-content-start'>
                                    <CustomInput type='radio' id='lifeCoverage' name='lifeCoverage' />
                                    <div style={{ paddingTop: 10 }}>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='e'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='f'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='g'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='h'
                                            name=''
                                            label=''
                                            inline
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <Row className='mt-2'>
                                <Col md='6'>
                                    <h5 style={{ paddingTop: 10 }}>Approximate Members</h5>
                                </Col>
                                <Col md='6'>
                                    <Input style={{ width: 230, marginLeft: -15 }} type='text' id='policy' placeholder='' />
                                </Col>
                            </Row>
                            <Row className='mt-2'>
                                <Col md='5'>
                                    <h5 style={{ paddingTop: 10 }}>Additional Family Members</h5>
                                </Col>
                                <Col md='7'>
                                    <div className='d-flex justify-content-end'>
                                        <Button style={{ height: 45 }} color='relief-primary' ><small>Adults</small><ChevronDown /></Button>
                                        <Button style={{ height: 45, marginLeft: 5 }} color='relief-primary'><small>Children</small><ChevronDown /></Button>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='flat-primary' onClick={() => setRequestPolicies(!requestPolicies)}>
                                Cancel
                            </Button>{' '}
                            <Button color='flat-primary' outline onClick={() => setRequestPolicies(!requestPolicies)}>
                                Submit
                            </Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default PoliciesQuickAccess
