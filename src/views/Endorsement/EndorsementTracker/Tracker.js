import React from 'react'
import Timeline from '@components/timeline'
import { List, MoreVertical } from 'react-feather'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardBody, CardTitle, Label, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import grid from '@src/assets/images/icons/grid.png'

function Tracker(props) {
    const data = [
        {
            title: 'Form Submitted',
            content: 'form submitted on specefic date',
            color: 'success',
            meta: '5 days ago',
            metaClassname: 'mr-1'
        },
        {
            title: 'Received to insurance company',
            content: 'received on specefic date',
            color: 'info',
            meta: '4 days ago',
            metaClassname: 'mr-1'
        },
        {
            title: 'Reviewing',
            content: 'reviewed on specefic date',
            color: 'warning',
            meta: '3 days ago',
            metaClassname: 'mr-1'
        },
        {
            title: 'Document Analysis',
            content: 'reviewed on specefic date',
            color: 'primary',
            meta: '2 days ago',
            metaClassname: 'mr-1'
        },
        {
            title: 'Decision Pending',
            content: 'to be decided ...',
            color: 'secondary',
            meta: '1 days ago',
            metaClassname: 'mr-1'
        }
    ]
    return (
        <>
            <div className='mt-1 mb-1'>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <Link to='/dashboard/endorsement'>Endorsement</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <span>Track</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <Row>
                <Col md='6' sm='12'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md='12' sm='12'>
                                    <h5>Endorsement Ticket No. 5645644464</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <div className='mt-1'>
                                        <Label  >Policy Holder name</Label><br />
                                        <span className='font-weight-bold'>Rahul Saxena</span>
                                    </div>
                                    <div className='mt-1'>
                                        <Label>Today's Date</Label><br />
                                        <span className='font-weight-bold'>30 February 2021</span>
                                    </div>
                                    <div className='mt-1'>
                                        <Label>Email</Label><br />
                                        <span className='font-weight-bold'>rahul@gmail.com</span>
                                    </div>
                                    <div className='mt-1'>
                                        <Label>Changes in Nominee(max 3)</Label><br />
                                        <span className='font-weight-bold'>02</span>
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className='mt-1'>
                                        <Label>Policy Number</Label><br />
                                        <span className='font-weight-bold'>E013382382</span>
                                    </div>
                                    <div className='mt-1'>
                                        <Label>Phone</Label><br />
                                        <span className='font-weight-bold'>+91 8895244687</span>
                                    </div>
                                    <div className='mt-1'>
                                        <Label>Changes in premium frequency</Label><br />
                                        <span className='font-weight-bold'>Monthly</span>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                    <Card>
                        <Table size='sm' responsive>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>RELATIONSHIP</th>
                                    <th>D.O.B</th>
                                    <th>CONTACT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: 60 }}>
                                    <td >Anjali Saxena</td>
                                    <td>Spouse</td>
                                    <td>12 Jun 1980</td>
                                    <td>+91 8334687938</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td >Rahul Saxena</td>
                                    <td>Son</td>
                                    <td>20 Aug 2000</td>
                                    <td>+91 8334689384</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td >Riya Saxena</td>
                                    <td>Daughter</td>
                                    <td>02 Sep 1990</td>
                                    <td>+91 9134687938</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td >Rakesh Saxena</td>
                                    <td>Father</td>
                                    <td>20 Jun 1961</td>
                                    <td>+91 9934687938</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td >Pooja Saxena</td>
                                    <td>Mother</td>
                                    <td>12 Jan 1963</td>
                                    <td>+91 9734687938</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md='6' sm='12'>
                    <Card className='card-user-timeline' style={{ paddingBottom: 165 }}>
                        <CardHeader>
                            <div className='d-flex align-items-center'>
                                <List className='user-timeline-title-icon' />
                                <CardTitle tag='h4'>User Timeline</CardTitle>
                            </div>
                            <MoreVertical size={18} className='cursor-pointer' />
                        </CardHeader>
                        <CardBody>
                            <Timeline className='ml-50 mb-0' data={data} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Tracker
