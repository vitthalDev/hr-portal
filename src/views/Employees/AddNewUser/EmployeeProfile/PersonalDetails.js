// import { React, usestate } from 'react'
// import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'


// function PersonalDetails(props) {
//     return (
//         <>
//             <Card>
//             //personal Details
//                 <CardHeader>
//                     <CardTitle tag='h4'>Personal Details</CardTitle>
//                 </CardHeader>

//                 <CardBody>
//                     <Form>
//                         <Row>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='nationality'>Nationality</Label>
//                                     <Input type='select' name='nationality' id='nationality'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='religion'>Religion</Label>
//                                     <Input type='select' name='religion' id='religion'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='maritialStatus'>Maritial Status</Label>
//                                     <Input type='select' name='maritialStatus' id='maritialStatus'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='employmentOfSpouse'>Employment Of Spouse</Label>
//                                     <Input type='select' name='employmentOfSpouse' id='employmentOfSpouse'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='numberOfChildren'>No. of Children</Label>
//                                     <Input type='select' name='numberOfChildren' id='numberOfChildren'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                             <Col md='6' sm='12'>
//                                 <FormGroup>
//                                     <Label for='phoneNumber'>Phone Number</Label>
//                                     <Input type='phone' name='phoneNumber' id='phoneNumber'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                     </Form>
//                 </CardBody>

//             </Card>
//         </>
//     )
// }

// export default PersonalDetails

import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const PersonalDetails = ({ stepper, type }) => {
    const { register, errors, handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger()
        if (isObjEmpty(errors)) {
            stepper.next()
        }
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Address</h5>
                <small>Enter Your Address.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`nationality-${type}`}>
                            Nationality
                        </Label>
                        <Input
                            type='select'
                            name={`nationality-${type}`}
                            id={`nationality-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`nationality-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`religion-${type}`}>
                            Religion
                        </Label>
                        <Input
                            type='select'
                            name={`religion-${type}`}
                            id={`religion-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`religion-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`maritalStatus-${type}`}>
                            Marital Status
                        </Label>
                        <Input
                            type='select'
                            name={`maritalStatus-${type}`}
                            id={`maritalStatus-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`maritalStatus-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`employmentOfSpouse-${type}`}>
                            Employment Of Spouse
                        </Label>
                        <Input
                            type='select'
                            name={`employmentOfSpouse-${type}`}
                            id={`employmentOfSpouse-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`employmentOfSpouse-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`numberOfChildren-${type}`}>
                            No. Of Children
                        </Label>
                        <Input
                            type='select'
                            name={`numberOfChildren-${type}`}
                            id={`numberOfChildren-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`numberOfChildren-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`phonenumber-${type}`}>
                            Phone Number
                        </Label>
                        <Input
                            type='phone'
                            name={`phonenumber-${type}`}
                            id={`phonenumber-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`phonenumber-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
                        <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
                        <span className='align-middle d-sm-inline-block d-none'>Previous</span>
                    </Button.Ripple>
                    <Button.Ripple type='submit' color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Next</span>
                        <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default PersonalDetails
