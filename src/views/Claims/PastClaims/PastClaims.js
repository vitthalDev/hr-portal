import { React, useContext } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Badge, Label, Input, Button } from 'reactstrap'
import { useRTL } from '@hooks/useRTL'
import Avatar from '@components/avatar'
import { MapPin, Info, Download, File, Circle } from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
import CashlessVSRemClaims from './Assets/CashlessVSRemClaims'
import TopBenefitsUtilized from './Assets/TopBenefitsUtilized'
function PastClaims(props) {
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
            <Row>
                <Col md='6' sm='12'>
                    <CashlessVSRemClaims direction={isRtl ? 'rtl' : 'ltr'} />
                </Col>
                <Col md='6' sm='12'>
                    <TopBenefitsUtilized
                        primary={context.colors.primary.main}
                        warning={context.colors.warning.main}
                        danger={context.colors.danger.main}
                        success={context.colors.success.main}
                    />
                </Col>
            </Row>
            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h6'>Past Claims</CardTitle><br />
                        </CardHeader>
                        <Row className='mx-0 mt-1 mb-50'>
                            <Col sm='2'>
                                <div className='d-flex align-items-center'>
                                    <Label for='sort-select'>show</Label>
                                    <Input
                                        className='dataTable-select'
                                        type='select'
                                        id='sort-select'
                                        // value={rowsPerPage}
                                        onChange={e => handlePerPage(e)}
                                    >
                                        <option value={7}>7</option>
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={50}>50</option>
                                        <option value={75}>75</option>
                                        <option value={100}>100</option>
                                    </Input>
                                    <Label for='sort-select'>Entries</Label>
                                </div>
                            </Col>
                            <Col sm='7'>

                            </Col>
                            <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='3'>
                                {/* <Label className='mr-1' for='search-input'>
                            Search
                        </Label> */}
                                <Input
                                    className='dataTable-filter'
                                    type='text'
                                    bsSize='sm'
                                    id='search-input'
                                    placeHolder='Search'
                                // value={searchValue}
                                // onChange={handleFilter}
                                />
                            </Col>
                        </Row>
                        <CardBody>
                            <Table size='sm' responsive>
                                <thead>
                                    <tr>
                                        <th style={{ fontSize: 8 }}>EMPLOYEE NAME</th>
                                        <th style={{ fontSize: 8 }}>HOSPITAL NAME</th>
                                        <th style={{ fontSize: 8 }} >DESIGNATION</th>
                                        <th style={{ fontSize: 8 }}>ADMISSION DATE</th>
                                        <th style={{ fontSize: 8 }}>ESTIMATED DISCHARGE DATE</th>
                                        <th style={{ fontSize: 8 }}>REASON OF ADMISSION</th>
                                        <th style={{ fontSize: 8 }}>STATUS</th>
                                        <th style={{ fontSize: 8 }}>CLAIM FORM</th>
                                        {/* <th style={{ fontSize: 8 }}>PRE-AUTH</th> */}
                                        <th style={{ fontSize: 8 }}>CLAIM DOCUMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
                                        <td><Info size={20} style={{ cursor: 'pointer' }} onClick={() => setShowClaimStatus(!showClaimStatus)} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='info' pill>Issued</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                    <tr>
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
                                        <td><Info size={20} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='danger' pill>In-procs</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                    <tr>
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
                                        <td><Info size={20} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='info' pill>Issued</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                    <tr>
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
                                        <td><Info size={20} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='info' pill>Issued</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                    <tr>
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
                                        <td><Info size={20} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='danger' pill>In-procs</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                    <tr>
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
                                        <td><Info size={20} /></td>
                                        <td><Download size={20} /></td>
                                        {/* <td><Badge color='info' pill>Issued</Badge></td> */}
                                        <td><File size={20} /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PastClaims
