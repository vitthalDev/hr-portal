import { React, useState, Fragment } from 'react'
import Avatar from '@components/avatar'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import { Layout, Calendar, Phone, Mail, MapPin, User, Edit, Edit2, Trash, Trash2 } from 'react-feather'
import { Row, Col, CardGroup, Card, FormGroup, Input, Form, Label, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, CardText, CardFooter, Button, ButtonGroup, Badge, Table, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import CardHeader from 'reactstrap/lib/CardHeader'
import { Link } from 'react-router-dom'
import grid from '@src/assets/images/icons/grid.png'

function EmployeesProfile(props) {
    const [showEditProfile, setShowEditProfile] = useState(false)
    const [showPolicyDetail, setShowPolicyDetail] = useState(false)
    const [showPersonalDetail, setShowPersonalDetail] = useState(false)
    const [showFamilyDetail, setShowFamilyDetail] = useState(false)
    const [showEmergencyDetail, setShowEmergencyDetail] = useState(false)
    return (
        <>
            <div className='mt-1 mb-1'>
                <Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <Link to='/dashboard/employees'>Employees</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Profile</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </div>
            <Row>
                <Col md='9'>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md='6'>
                                    <Row>
                                        <Col md='3'>
                                            <Avatar img={avatarImg} size='xl' />
                                        </Col>
                                        <Col md='9'>
                                            <h3>Rahul Sharma</h3>
                                            <h6>Tax Consultant</h6>
                                            <div>
                                                <Button.Ripple color='primary' onClick={() => setShowEditProfile(!showPersonalDetail)}>Edit</Button.Ripple>
                                                <Button.Ripple className='ml-1' color='danger' outline>Delete</Button.Ripple>
                                            </div>
                                        </Col>
                                    </Row><br />
                                    <Row>
                                        <Col md='1'>
                                            <div className='avatar avatar-stats p-50 m-0 bg-light-success'>
                                                <div className='avatar-content'><Layout /></div>
                                            </div>
                                        </Col>
                                        <Col md='5' className='pl-3'>
                                            <h6 style={{ paddingTop: 5, fontSize: 12 }}>Employee ID</h6>
                                            <span>TT01</span>
                                        </Col>
                                        <Col md='1' style={{ marginLeft: -40 }}>
                                            <div className='avatar avatar-stats p-50 m-0 bg-light-primary'>
                                                <div className='avatar-content'><Calendar /></div>
                                            </div>
                                        </Col>
                                        <Col md='5' className='pl-3'>
                                            <h6 style={{ paddingTop: 5, fontSize: 12 }}>Date of Join</h6>
                                            <span>1st Jan 2013</span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md='3'>
                                    <div style={{ padding: 5 }}>
                                        <span><Phone size={14} />Phone</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span><Mail size={14} />Email</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span><Calendar size={14} />Birth Date</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span><MapPin size={14} />Address</span>
                                    </div><br />
                                    <div style={{ padding: 5 }}>
                                        <span><User size={14} />Gender</span>
                                    </div>
                                </Col>
                                <Col md='3'>
                                    <div style={{ padding: 5 }}>
                                        <span>9455465872</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span>Rahul@gmail.com</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span>22th July 1991</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span>204/13, Start Colony, Thane-0000</span>
                                    </div>
                                    <div style={{ padding: 5 }}>
                                        <span>Male</span>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='3'>
                    <Card>
                        <CardBody style={{ height: 210 }}>
                            <Row style={{ paddingBottom: 12 }}>
                                <Col md='8'>
                                    <div style={{ fontSize: 10 }}>
                                        <span>Current Policy</span><br />
                                        <small>Family Floater Plan</small>
                                    </div>
                                </Col>
                                <Col md='4' style={{ fontSize: 8 }}>
                                    <small className='bg-light-primary '>5 Lakh</small>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div style={{ fontSize: 12 }}>
                                        <span>Term 5-62 years</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div style={{ fontSize: 12 }}>
                                        <span>21 JAN 2021 - 20 JAN 2022</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div style={{ fontSize: 12 }}>
                                        <span>Family Members - 4</span>
                                    </div>
                                </Col>
                            </Row><br />
                            <Row>
                                <ButtonGroup>
                                    <Button.Ripple color='primary' style={{ width: 100, marginLeft: 5, marginRight: 5 }} onClick={(e) => { setShowPolicyDetail(!showPolicyDetail) }}><small style={{ fontSize: 8 }}>Upgrade Plan</small></Button.Ripple>
                                    <Button.Ripple color='warning' style={{ width: 100, marginLeft: 5, marginRight: 5 }}><small style={{ fontSize: 8 }}>Share Policy</small></Button.Ripple>
                                </ButtonGroup>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='5'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Personal Information <Edit style={{ marginLeft: 150, cursor: 'pointer', marginBottom: 20 }} size={16} onClick={() => setShowPersonalDetail(!showPersonalDetail)} /></CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md='8'>
                                    <div style={{ padding: 2 }}>
                                        <span>Phone</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Nationality</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Religion</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Maratial Status</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Employmetn Of Spouse</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>No of Children</span>
                                    </div>
                                </Col>
                                <Col md='4'>
                                    <div style={{ padding: 2 }}>
                                        <span>9455465872</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Indian</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Hindu</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>Married</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>House Wife</span>
                                    </div>
                                    <div style={{ padding: 2 }}>
                                        <span>02</span>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='7'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Emergency Contact</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='md' responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Relationship</th>
                                        <th>Contact</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Rakesh</td>
                                        <td>Father</td>
                                        <td>+91 9875688374</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10, cursor: 'pointer' }} onClick={() => setShowEmergencyDetail(!showEmergencyDetail)} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Pooja</td>
                                        <td>Mother</td>
                                        <td>+91 9875685294</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Rohit</td>
                                        <td>Brother</td>
                                        <td>+91 7598268374</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Family Details</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='md' responsive>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Relationship</th>
                                        <th>D.O.B</th>
                                        <th>Contact</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Anjali Sharma</td>
                                        <td>Spouse</td>
                                        <td>12 June 1980</td>
                                        <td>+91 9836718599</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Rahul Saxena</td>
                                        <td>Son</td>
                                        <td>20 Aug 2005</td>
                                        <td>+91 8647256983</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Riya Sharma</td>
                                        <td>Daughter</td>
                                        <td>12 Sep 1999</td>
                                        <td>+91 9625759842</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Rakesh Sharma</td>
                                        <td>Father</td>
                                        <td>20 June 1960</td>
                                        <td>+91 8546234984</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10, cursor: 'pointer' }} onClick={() => setShowFamilyDetail(!showFamilyDetail)} /><Trash2 size={16} /></td>
                                    </tr>
                                    <tr>
                                        <td>Pooja Sharma</td>
                                        <td>Mother</td>
                                        <td>12 Sep 1963</td>
                                        <td>+91 9542698472</td>
                                        <td><Edit2 size={16} style={{ marginRight: 10 }} /><Trash2 size={16} /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


            {/* //profile Details modal */}
            <div>
                <Modal isOpen={showEditProfile} toggle={() => setShowEditProfile(!showEditProfile)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowEditProfile(!showEditProfile)}>Profile Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='firstname'>First Name</Label>
                                        <Input type='text' name='firstname' id='firstName' placeholder='Rahul' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='lastname'>Last Name</Label>
                                        <Input type='text' name='lastname' id='lastName' placeholder='Rahul Sharma' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='designation'>Designation</Label>
                                        <Input type='select' name='designation' id='designaton' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='policy'>Policy</Label>
                                        <Input type='select' name='policy' id='policy' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='dateOfBirth'>Date of Birth</Label>
                                        <Input type='date' name='dateOfBirth' id='dateOfBirth' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='dateOfJoin'>Date of Join</Label>
                                        <Input type='date' name='dateOfJoin' id='dateOfJoin ' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='email'>Email</Label>
                                        <Input type='email' name='email' id='email' placeholder='Rahul@gmail.com' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='gender'>Gender</Label>
                                        <Input type='select' name='gender' id='gender' placeholder='male' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='12'>
                                    <FormGroup>
                                        <Label for='address'>Address</Label>
                                        <Input type='text' name='address' id='address' placeholder='204/12, Star Colony, Shill Road' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='city'>City</Label>
                                        <Input type='text' name='city' id='city' placeholder='Thane' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='pincode'>Pin Code</Label>
                                        <Input type='text' name='pincode' id='pincode' placeholder='421204' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowEditProfile(!showEditProfile)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' outline onClick={() => setShowEditProfile(!showEditProfile)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

            {/* policy details modal */}

            <div>
                <Modal isOpen={showPolicyDetail} toggle={() => setShowPolicyDetail(!showPolicyDetail)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowPolicyDetail(!showPolicyDetail)}>Policy Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='policyPlan'>Policy Plan</Label>
                                        <Input type='select' name='policyPlan' id='policyPlan' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='policyTerm'>Policy Trem</Label>
                                        <Input type='select' name='policyTerm' id='policyTerm' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='policyStartDate'>Policy Start Date</Label>
                                        <Input type='date' name='policyStartDate' id='policyStartDate' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='expiryDate'>Expiry Date</Label>
                                        <Input type='date' name='expiryDate' id='expiryDate' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='familyMembers'>Family Members</Label>
                                        <Input type='select' name='familymembers' id='familyMembers' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowPolicyDetail(!showPolicyDetail)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowPolicyDetail(!showPolicyDetail)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

            {/* personal details modal */}

            <div>
                <Modal isOpen={showPersonalDetail} toggle={() => setShowPersonalDetail(!showPersonalDetail)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowPersonalDetail(!showPersonalDetail)}>Personal Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='nationality'>Nationality</Label>
                                        <Input type='select' name='nationality' id='nationality' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='religion'>Religion</Label>
                                        <Input type='select' name='religion' id='religion' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='maritalStatus'>Marital Status</Label>
                                        <Input type='select' name='maritalStatus' id='maritalStatus' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='employmentOfWife'>Employment Of Wife</Label>
                                        <Input type='select' name='employmentOfWife' id='employmentOfWife' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='phone'>Phone</Label>
                                        <Input type='mobile' name='phone' id='phone' />
                                    </FormGroup>
                                </Col>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='numberOfChilldren'>Number of Children</Label>
                                        <Input type='select' name='numberOfChilldren' id='numberOfChilldren' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowPersonalDetail(!showPersonalDetail)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowPersonalDetail(!showPersonalDetail)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

            {/* personal details modal */}

            <div>
                <Modal isOpen={showFamilyDetail} toggle={() => setShowFamilyDetail(!showFamilyDetail)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowFamilyDetail(!showFamilyDetail)}>Family Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='name'>Name</Label>
                                        <Input type='text' name='name' id='name' />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for='relationship'>Relatonship</Label>
                                        <Input type='select' name='relationship' id='relationship' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='phone'>Phone</Label>
                                        <Input type='mobile' name='phone' id='phone' />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for='expiryDate'>Expiry Date</Label>
                                        <Input type='date' name='expiryDate' id='expiryDate' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowFamilyDetail(!showFamilyDetail)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowFamilyDetail(!showFamilyDetail)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>

            {/* emergency contact detail */}

            <div>
                <Modal isOpen={showEmergencyDetail} toggle={() => setShowEmergencyDetail(!showEmergencyDetail)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowEmergencyDetail(!showEmergencyDetail)}>Family Details</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='name'>Name</Label>
                                        <Input type='text' name='name' id='name' />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label for='relationship'>Relatonship</Label>
                                        <Input type='select' name='relationship' id='relationship' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6' sm='12'>
                                    <FormGroup>
                                        <Label for='phone'>Phone</Label>
                                        <Input type='mobile' name='phone' id='phone' />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='flat-primary' onClick={() => setShowEmergencyDetail(!showEmergencyDetail)}>
                            Cancel
                        </Button>{' '}
                        <Button color='flat-primary' onClick={() => setShowEmergencyDetail(!showEmergencyDetail)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default EmployeesProfile
