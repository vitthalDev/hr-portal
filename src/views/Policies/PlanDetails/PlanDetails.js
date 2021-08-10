import React from 'react'
import Cleave from 'cleave.js/react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, CardText, FormGroup, Input, Form, Button, Label, CustomInput } from 'reactstrap'
import phonePe from '@src/assets/images/icons/phonePe.png'
import gpay from '@src/assets/images/icons/gpay.png'
import bhim from '@src/assets/images/icons/bhim.png'
import PayPal from '@src/assets/images/icons/PayPal.png'

function PlanDetails(props) {
    return (
        <>
            <Card className='invoice-preview-card'>
                <CardHeader>
                    <h1>Checkout</h1>
                </CardHeader>
                <CardBody className='invoice-padding pb-0'>
                    <Row>
                        <Col md='6' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>PLAN DETAILS</CardTitle>
                                </CardHeader>
                                <hr></hr>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md='6' sm='12'>
                                                <h6>Policy Plan</h6>
                                                <h4>Family Floater Plan</h4>
                                            </Col>
                                            <Col md='6' sm='12'>
                                                <h6>Policy Term</h6>
                                                <h4>5-62 Year</h4>
                                            </Col>
                                        </Row>
                                        <Row className='mt-2'>
                                            <Col md='6' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>Policy Start Date</Label>
                                                    <Input type='date' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='6' sm='12'>
                                                <FormGroup>
                                                    <Label for=''>New Expiry Date</Label>
                                                    <Input type='date' name='' id='' />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md='6' sm='12'>
                                                <FormGroup>
                                                    <Label>Members</Label>
                                                    <Input type='select' />
                                                </FormGroup>
                                            </Col>
                                            <Col md='6' sm='12'>
                                                <Label>Amount to be paid</Label><br />
                                                <div style={{ paddingTop: 0 }}>
                                                    <span className='font-weight-bold' style={{ fontSize: 23 }}><b>INR 5,00,000</b></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div>
                                        <Card className='bg-warning'>
                                            <Row className='pl-1 pt-1'>
                                                <Col md='12'>
                                                    <h6>Do you have a promocode?</h6>
                                                </Col>
                                            </Row>
                                            <Row className='pl-1 pt-1'>
                                                <Col md='8'>
                                                    <Input type='text' placeHolder='**** **** ****' />
                                                </Col>
                                                <Col md='4'>
                                                    <Button color={'danger'}>Apply</Button>
                                                </Col>
                                            </Row>
                                            <Row className='pl-1 pt-1 pb-1'>
                                                <Col md='12'>
                                                    <CustomInput
                                                        type='checkbox'
                                                        className='custom-control-Primary'
                                                        id='Primary'
                                                        label='Primary'
                                                        defaultChecked
                                                        inline
                                                    />
                                                </Col>
                                            </Row>
                                        </Card>
                                        <small>Terms and condition applied <sup>*</sup></small>
                                    </div>
                                    <Row className='pt-2'>
                                        <Col md='6' sm='12'>
                                            <h5>PRICE DETAILS</h5>

                                            <Label>Total Price</Label><br /><br />
                                            <Label>Coupon Discount</Label>
                                        </Col>
                                        <Col md='6' sm='12'>
                                            <div className='mt-2'>
                                                <span>INR 5,00,000</span><br /><br />
                                                <span style={{ color: 'green' }}>- INR 5,000</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr className='my-50' />
                                    <Row className='pt-2'>
                                        <Col md='6' sm='12'>
                                            <Label>Total Amount</Label><br />
                                        </Col>
                                        <Col md='6' sm='12'>
                                            <span>INR 4,95,000</span>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='6' sm='12'>
                            <Card>
                                <CardHeader>
                                    <CardTitle tag='h6'>PAYMENT</CardTitle>
                                </CardHeader>
                                <hr></hr>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <h4>Wallet Payment</h4>
                                                    <CustomInput
                                                        type='radio'
                                                        className='custom-control-primary'
                                                        id='phonePay'
                                                        name='payment'
                                                        label='phone'
                                                        inline
                                                    />
                                                    <img src={phonePe} style={{ marginLeft: -15, paddingRight: 10 }} />
                                                    <CustomInput
                                                        type='radio'
                                                        className='custom-control-primary'
                                                        id='gPay'
                                                        name='payment'
                                                        label={<div style={{ marginLeft: -5 }}><img src={gpay} style={{ marginLeft: 0, paddingRight: 10 }} /><span style={{ marginLeft: -10 }}>Pay</span></div>}
                                                        inline
                                                    />
                                                    <CustomInput
                                                        type='radio'
                                                        className='custom-control-primary'
                                                        id='bhim'
                                                        name='payment'
                                                        label='Bhim'
                                                        inline
                                                    />
                                                    <img src={bhim} style={{ marginLeft: -20, paddingRight: 10 }} />
                                                    <CustomInput
                                                        type='radio'
                                                        className='custom-control-primary'
                                                        id='paypal'
                                                        name='payment'
                                                        label={<div style={{ marginLeft: -5 }}><img src={PayPal} style={{ marginLeft: -10, paddingRight: 10 }} /><span style={{ marginLeft: -20 }}>PayPal</span></div>}
                                                        inline
                                                    />
                                                    <CustomInput
                                                        type='radio'
                                                        className='custom-control-primary'
                                                        id='ofline'
                                                        name='payment'
                                                        label='ofline'
                                                        defaultChecked
                                                        inline
                                                    />
                                                </FormGroup>
                                                <h6>You are choosing a payment through Phone UPI</h6>
                                            </Col>
                                        </Row>
                                    </Form>

                                    <div className='pt-2 pb-2'>
                                        <Card className='bg-primary'>
                                            <CardBody>
                                                <FormGroup check inline>
                                                    <Label style={{ color: 'white' }} check>
                                                        <Input type='radio' name='ex1' defaultChecked /> Debit Card / Credit Card
                                                    </Label>
                                                    <Label style={{ marginLeft: 20, color: 'white' }} check>
                                                        <Input type='radio' name='ex1' defaultChecked /> Offline
                                                    </Label>
                                                </FormGroup>
                                                <Label className='pt-1' style={{ color: 'white' }}>
                                                    You are choosing a payment option. Please fill the details of your card
                                                </Label>
                                            </CardBody>
                                        </Card>
                                    </div>

                                    <Form className='form' onSubmit={e => e.preventDefault()}>
                                        <Row>
                                            <Col sm='12'>
                                                <h6>CARD DETAILS</h6>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm='12'>
                                                <FormGroup className='mb-2'>
                                                    <Label for='payment-input-name'>Name on Card</Label>
                                                    <Input placeholder='Curtis Stone' id='payment-input-name' />
                                                </FormGroup>
                                            </Col>
                                            <Col sm='12'>
                                                <FormGroup className='mb-2'>
                                                    <Label for='payment-card-number'>Card Number</Label>
                                                    <Cleave
                                                        className='form-control'
                                                        placeholder='2133 3244 4567 8921'
                                                        options={{ creditCard: true }}
                                                        id='payment-card-number'
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col sm='6'>
                                                <FormGroup className='mb-2'>
                                                    <Label for='payment-expiry'>Expiry</Label>
                                                    <Cleave
                                                        className='form-control'
                                                        placeholder='MM / YY'
                                                        options={{ date: true, delimiter: '/', datePattern: ['Y', 'm'] }}
                                                        id='payment-expiry'
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col sm='6'>
                                                <FormGroup className='mb-2'>
                                                    <Label for='payment-cvv'>CVV / CVC</Label>
                                                    <Input type='number' placeholder='123' id='payment-cvv' />
                                                </FormGroup>
                                            </Col>

                                            <Col sm='12'>
                                                <Button.Ripple color='primary' block>
                                                    Pay
                                                </Button.Ripple>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default PlanDetails
