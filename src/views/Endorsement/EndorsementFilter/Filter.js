import React from 'react'
import { Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Row, Col, Label, Input } from 'reactstrap'

function EndorsementFilters(props) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle tag='h4'>Filters</CardTitle>
                </CardHeader>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='employeeID'>Type</Label>
                                    <Input type='select' name='employeeID' />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='employeeName'>Reason</Label>
                                    <Input type='select' name='employeeName' />
                                </FormGroup>
                            </Col>
                            <Col md='4' sm='12'>
                                <FormGroup>
                                    <Label for='designation'>Monthly</Label>
                                    <Input type='select' name='designation' />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}

export default EndorsementFilters
