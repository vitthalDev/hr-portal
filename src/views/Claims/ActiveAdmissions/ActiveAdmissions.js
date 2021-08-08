import { React, useContext, Fragment, useState } from 'react'
import { Row, Col, Table, Badge, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, CustomInput } from 'reactstrap'
import Avatar from '@components/avatar'
import { useRTL } from '@hooks/useRTL'
import { useSkin } from '@hooks/useSkin'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { MapPin, Info, Download, File, Circle } from 'react-feather'
import OverallClaims from './Assets/OverallClaims'
import OverallClaimsCost from './Assets/OverallClaimCost'
import ClaimStatus from './Assets/ClaimStatus'

function ActiveAdmissions() {
    const [showClaimStatus, setShowClaimStatus] = useState(false)
    const [showRequiredDocuments, setShowRequiredDocuments] = useState(false)
    const { colors } = useContext(ThemeColors)
    const [isRtl, setIsRtl] = useRTL(),
        [skin, setSkin] = useSkin(),
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
            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <Table size='sm' responsive>
                            <thead>
                                <tr className='text-center'>
                                    <th style={{ fontSize: 10, height: 50 }}>EMPLOYEE NAME</th>
                                    <th style={{ fontSize: 10 }}>HOSPITAL NAME</th>
                                    <th style={{ fontSize: 10 }} >DESIGNATION</th>
                                    <th style={{ fontSize: 10 }}>ADMISSION DATE</th>
                                    <th style={{ fontSize: 10 }}>ESTIMATED DISCHARGE DATE</th>
                                    <th style={{ fontSize: 10 }}>REASON OF ADMISSION</th>
                                    <th style={{ fontSize: 10 }}>STATUS</th>
                                    <th style={{ fontSize: 10 }}>CLAIM FORM</th>
                                    <th style={{ fontSize: 10 }}>PRE-AUTH</th>
                                    <th style={{ fontSize: 10 }}>CLAIM DOCUMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='success' content='R' style={{ marginRight: 5, padding: 0 }} />
                                        Rahul Saxena
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>All India Institute of Medical Science</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Grant Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>Manager</td>
                                    <td style={{ fontSize: 12 }}>20 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>24 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>malaria</td>
                                    <td><Info className='bg-primary' size={20} style={{ cursor: 'pointer', color: 'white', borderRadius: 50 }} onClick={() => setShowClaimStatus(!showClaimStatus)} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='info' pill>Issued</Badge></td>
                                    <td style={{ cursor: 'pointer' }} onClick={() => setShowRequiredDocuments(!showRequiredDocuments)}><File size={20} /></td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='primary' content='N' style={{ marginRight: 5, padding: 0 }} />
                                        Nikhil D
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>Christian Medical College</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Charni Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>tax Consultant</td>
                                    <td style={{ fontSize: 12 }}>02 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>22 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>Cardiac Arrest</td>
                                    <td><Info className='bg-primary' style={{ color: 'white', borderRadius: 50 }} size={20} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='danger' pill>In-procs</Badge></td>
                                    <td><File size={20} /></td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='info' content='A' style={{ marginRight: 5, padding: 0 }} />
                                        Anjali Saxena
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>tata Memorial Hospital</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Manpada Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>Developer</td>
                                    <td style={{ fontSize: 12 }}>21 Feb 2021</td>
                                    <td style={{ fontSize: 12 }}>24 Mar 2021</td>
                                    <td style={{ fontSize: 12 }}>Fever</td>
                                    <td><Info className='bg-primary' style={{ color: 'white', borderRadius: 50 }} size={20} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='info' pill>Issued</Badge></td>
                                    <td><File size={20} /></td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='success' content='R' style={{ marginRight: 5, padding: 0 }} />
                                        Rahul Saxena
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>All India Institute of Medical Science</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Grant Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>Manager</td>
                                    <td style={{ fontSize: 12 }}>20 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>24 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>malaria</td>
                                    <td><Info className='bg-primary' style={{ color: 'white', borderRadius: 50 }} size={20} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='info' pill>Issued</Badge></td>
                                    <td><File size={20} /></td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='primary' content='N' style={{ marginRight: 5, padding: 0 }} />
                                        Nikhil D
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>Christian Medical College</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Charni Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>tax Consultant</td>
                                    <td style={{ fontSize: 12 }}>02 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>22 Jan 2021</td>
                                    <td style={{ fontSize: 12 }}>Cardiac Arrest</td>
                                    <td><Info className='bg-primary' style={{ color: 'white', borderRadius: 50 }} size={20} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='danger' pill>In-procs</Badge></td>
                                    <td><File size={20} /></td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td style={{ width: 140, fontSize: 12 }}>
                                        <Avatar color='info' content='A' style={{ marginRight: 5, padding: 0 }} />
                                        Anjali Saxena
                                    </td>
                                    <td style={{ width: 250 }}>
                                        <u style={{ fontSize: 12 }}>tata Memorial Hospital</u><br />
                                        <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Charni Road Mumbai- 4200002</span>
                                    </td>
                                    <td style={{ fontSize: 12 }}>Developer</td>
                                    <td style={{ fontSize: 12 }}>21 Feb 2021</td>
                                    <td style={{ fontSize: 12 }}>24 Mar 2021</td>
                                    <td style={{ fontSize: 12 }}>Fever</td>
                                    <td><Info className='bg-primary' style={{ color: 'white', borderRadius: 50 }} size={20} /></td>
                                    <td><Download size={20} /></td>
                                    <td><Badge color='info' pill>Issued</Badge></td>
                                    <td><File size={20} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='6' sm='12'>
                    <OverallClaims
                        direction={isRtl ? 'rtl' : 'ltr'}
                        primary={colors.primary.main}
                        success={colors.success.main}
                        warning={colors.warning.main}
                    />
                </Col>
                <Col md='6' sm='12'>
                    <OverallClaimsCost direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                </Col>
            </Row>

            <div>
                <Modal isOpen={showClaimStatus} toggle={() => setShowClaimStatus(!showClaimStatus)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowClaimStatus(!showClaimStatus)}>Claim Status</ModalHeader>
                    <ModalBody>
                        <ClaimStatus />
                    </ModalBody>
                </Modal>
            </div>

            <div>
                <Modal isOpen={showRequiredDocuments} toggle={() => setShowRequiredDocuments(!showRequiredDocuments)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowRequiredDocuments(!showRequiredDocuments)}>Documents Required</ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col md='6' sm='12'>
                                            <FormGroup>
                                                <Label for=''>Document 1</Label>
                                                <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6' sm='12'>
                                            <FormGroup>
                                                <Label for=''>Document 2</Label>
                                                <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6' sm='12'>
                                            <FormGroup>
                                                <Label for=''>Document 3</Label>
                                                <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                                            </FormGroup>
                                        </Col>
                                        <Col md='6' sm='12'>
                                            <FormGroup>
                                                <Label for=''>Document 4</Label>
                                                <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowRequiredDocuments(!showRequiredDocuments)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowRequiredDocuments(!showRequiredDocuments)}>
                            Submit
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default ActiveAdmissions
