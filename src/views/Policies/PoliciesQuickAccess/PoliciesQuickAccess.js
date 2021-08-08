import { React, Fragment, useState } from 'react'
import { Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Input, CustomInput } from 'reactstrap'
import { Users, Archive, File, Download, ChevronDown } from 'react-feather'
import processOK from '@src/assets/images/icons/processOK.png'
import verifiedChecked from '@src/assets/images/icons/verifiedChecked.png'
import fileCancelled from '@src/assets/images/icons/fileCancelled.png'
import hourSandCircle from '@src/assets/images/icons/hourSandCircle.png'

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
                                    <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>03</h2>
                                    <p className='card-text' style={{ color: '#625F6E' }}>Health Cover</p>
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
                                    <h2 className='font-weight-medium mb-0' style={{ color: '#625F6E' }}>03</h2>
                                    <p className='card-text' style={{ color: '#625F6E' }}>Life Cover</p>
                                </div>
                                <div>
                                    <img src={fileCancelled} />
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
                                    <img src={hourSandCircle} />
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
                                    <h5 style={{ padding: 10 }}>Policy</h5>
                                </Col>
                                <Col md='6'>
                                    <Input type='text' id='policy' placeholder='Rs' />
                                </Col>
                            </Row>
                            <Row className='pt-2'>
                                <Col md='10'>
                                    <h5 style={{ padding: 10 }}>Health Cover</h5>
                                    <div style={{ paddingLeft: 10 }}>
                                        <small>OPD</small><br />
                                        <small>Cashless</small><br />
                                        <small>Home Service</small><br />
                                        <small>Medicene Claim</small>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <CustomInput type='radio' id='healthCoverage' name='healthCoverage' />
                                    <div style={{ paddingTop: 20 }}>
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='Primary'
                                            label=''
                                            defaultChecked
                                            inline
                                        />
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='Primary'
                                            label=''
                                            defaultChecked
                                            inline
                                        />
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='Primary'
                                            label=''
                                            defaultChecked
                                            inline
                                        />
                                        <CustomInput
                                            type='checkbox'
                                            className='custom-control-Primary'
                                            id='Primary'
                                            label=''
                                            defaultChecked
                                            inline
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='pt-2'>
                                <Col md='10'>
                                    <h5 style={{ padding: 10 }}>Life Cover</h5>
                                    <div style={{ paddingLeft: 10 }}>
                                        <small>OPD</small><br />
                                        <small>Cashless</small><br />
                                        <small>Home Service</small><br />
                                        <small>Medicene Claim</small>
                                    </div>
                                </Col>
                                <Col md='2'>
                                    <CustomInput type='radio' id='healthCoverage' name='healthCoverage' />
                                    <div style={{ paddingTop: 20 }}>
                                        <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' />
                                        <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' />
                                        <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' />
                                        <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <h5 style={{ padding: 10 }}>Approximate Members</h5>
                                </Col>
                                <Col md='6'>
                                    <Input type='text' id='policy' placeholder='' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md='5'>
                                    <h5 style={{ padding: 10 }}>Additional Family Members</h5>
                                </Col>
                                <Col md='7'>
                                    <div className='d-flex justify-content-between'>
                                        <Button color='relief-primary' ><small>Adults</small><ChevronDown /></Button>
                                        <Button color='relief-primary'><small>Children</small><ChevronDown /></Button>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='flat-primary' onClick={() => setRequestPolicies(!requestPolicies)}>
                                Cancel
                            </Button>{' '}
                            <Button color='flat-primary' outline onClick={() => setRequestPolicies(!requestPolicies)}>
                                Download
                            </Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default PoliciesQuickAccess
