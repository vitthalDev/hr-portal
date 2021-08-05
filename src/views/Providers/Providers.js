import React from 'react'
import Avatar from '@components/avatar'
import { MapPin, Info, Download, File, Circle } from 'react-feather'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label, Table, Badge } from 'reactstrap'
import ProvidersQuickAccess from './QuickAccess/ProvidersQuickAccess'

function Providers(props) {
    return (
        <>
            <Row>
                <Col md='12' sm='12'>
                    <ProvidersQuickAccess />
                </Col>
            </Row>
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle tag='h4'>Filters</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for=''>Network</Label>
                                        <Input type='select' id='' />
                                    </FormGroup>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for=''>Location</Label>
                                        <Input type='select' id='' />
                                    </FormGroup>
                                </Col>
                                <Col md='4' sm='12'>
                                    <FormGroup>
                                        <Label for=''>Hospital/Lab/Bloodbank</Label>
                                        <Input type='select' id='' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>

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
                                        <th style={{ fontSize: 10 }}>HOSPITAL NAME</th>
                                        <th style={{ fontSize: 10 }} >SCHEDULE</th>
                                        <th style={{ fontSize: 10 }}>CONTACT</th>
                                        <th style={{ fontSize: 10 }}>NETWORK</th>
                                        <th style={{ fontSize: 10 }}>PROVIDER TYPE</th>
                                        <th style={{ fontSize: 10 }}>CASE TILL DATE</th>
                                        <th style={{ fontSize: 10 }}>ACTIVECASE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: 250 }}>
                                            <u style={{ fontSize: 12 }}>All India Institute of Medical Science</u><br />
                                            <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Grant Road Mumbai- 4200002</span>
                                        </td>
                                        <td style={{ fontSize: 12, width: 120 }}>Open 24 hrs</td>
                                        <td style={{ fontSize: 12, width: 120 }}>+91 9347432788</td>
                                        <td style={{ fontSize: 12, width: 120 }}><Badge color='info' pill>In-Network</Badge></td>
                                        <td style={{ fontSize: 12, width: 150 }}>Hospital</td>
                                        <td>06</td>
                                        <td>02</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>
                                            <u style={{ fontSize: 12 }}>Christian Medical College</u><br />
                                            <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Charni Road Mumbai- 4200002</span>
                                        </td>
                                        <td style={{ fontSize: 12, width: 120 }}>Open 24 hrs</td>
                                        <td style={{ fontSize: 12, width: 120 }}>+91 8947432788</td>
                                        <td style={{ fontSize: 12, width: 120 }}><Badge color='info' pill>In-Network</Badge></td>
                                        <td style={{ fontSize: 12, width: 150 }}>Hospital</td>
                                        <td>16</td>
                                        <td>06</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>
                                            <u style={{ fontSize: 12 }}>Lal & sons pathology</u><br />
                                            <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Manpada Road Mumbai- 4200002</span>
                                        </td>
                                        <td style={{ fontSize: 12, width: 120 }}>Open 24 hrs</td>
                                        <td style={{ fontSize: 12, width: 120 }}>+91 9787432788</td>
                                        <td style={{ fontSize: 12, width: 120 }}><Badge color='danger' pill>Out-Network</Badge></td>
                                        <td style={{ fontSize: 12, width: 150 }}>Laboratory</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>
                                            <u style={{ fontSize: 12 }}>Care Blood Bank</u><br />
                                            <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Grant Road Mumbai- 4200002</span>
                                        </td>
                                        <td style={{ fontSize: 12, width: 120 }}>Open 24 hrs</td>
                                        <td style={{ fontSize: 12, width: 120 }}>+91 7347432788</td>
                                        <td style={{ fontSize: 12, width: 120 }}><Badge color='info' pill>In-Network</Badge></td>
                                        <td style={{ fontSize: 12, width: 150 }}>Blood bank</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: 250 }}>
                                            <u style={{ fontSize: 12 }}>Lilavati Hospital</u><br />
                                            <MapPin color={'red'} size={14} /><span style={{ fontSize: 10 }}>Hind Mata Chowk Mumbai- 4200002</span>
                                        </td>
                                        <td style={{ fontSize: 12, width: 120 }}>Open 24 hrs</td>
                                        <td style={{ fontSize: 12, width: 120 }}>+91 9947432788</td>
                                        <td style={{ fontSize: 12, width: 120 }}><Badge color='info' pill>In-Network</Badge></td>
                                        <td style={{ fontSize: 12, width: 150 }}>Hospital</td>
                                        <td>03</td>
                                        <td>01</td>
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

export default Providers
