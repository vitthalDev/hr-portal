import React from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Calendar } from 'react-feather'
import { Link } from 'react-router-dom'
import ActiveAdmissions from './ActiveAdmissions/ActiveAdmissions'
import PastClaims from './PastClaims/PastClaims'
import Analysis from './Analysis/Analysis'
import grid from '@src/assets/images/icons/grid.png'

function Claims(props) {
    const [active, setActive] = React.useState("activeAdmissions")
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Claims</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>

            <div className="row text-center" style={{ height: 45 }}>
                <div className="col-lg-2 ml-1 mt-1">
                    <div
                        className={
                            active === "activeAdmissions" ? "text-primary" : "text-black"
                        }
                        onClick={(e) => {
                            e.preventDefault()
                            setActive("activeAdmissions")
                        }}
                        style={{ cursor: "pointer", fontSize: 15 }}
                    >
                        <span>Active Admissions</span>
                    </div>
                    <div>
                        {active === "activeAdmissions" ? (
                            <i className="fas fa-caret-up text-primary fs-1"></i>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="col-lg-2 mt-1">
                    <div
                        className={active === "pastClaims" ? "text-primary" : "text-black"}
                        onClick={(e) => {
                            e.preventDefault()
                            setActive("pastClaims")
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Past Claims</span>
                    </div>
                    <div>
                        {active === "pastClaims" ? (
                            <i className="fas fa-caret-up text-primary fs-1"></i>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="col-lg-2 mt-1 mb-1">
                    <div
                        className={active === "analysis" ? "text-primary" : "text-black"}
                        onClick={(e) => {
                            e.preventDefault()
                            setActive("analysis")
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Analysis</span>
                    </div>
                    <div>
                        {active === "analysis" ? (
                            <i className="fas fa-caret-up text-primary fs-1"></i>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            {active === 'activeAdmissions' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy Type</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Employee Name/ID</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Designation</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Hospital Name</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Location</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Status</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <ActiveAdmissions {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
            {active === 'pastClaims' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy Type</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Employee Name/ID</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Designation</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Hospital Name</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Location</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Status</Label>
                                                    <Input type='select' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <PastClaims {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
            {active === 'analysis' ? (
                <>
                    <Row>
                        <Col md='12' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>Filters</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='4' sm='12'>
                                                <FormGroup>
                                                    <Label for='policyType'>Policy</Label>
                                                    <Input type='select' name='policy' id='policyType' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='4' sm='12' className='mt-1'>
                                                <div>
                                                    <span>Choose Date</span>
                                                </div>
                                                <div>
                                                    <small><Calendar size={14} />2021-01--01 to 2021-07-03</small>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='12' sm='12'>
                            <Analysis {...props} />
                        </Col>
                    </Row>
                </>
            ) : null}
        </>
    )
}

export default Claims
