// import { React, useState } from 'react'
// import Breadcrumbs from '@components/breadcrumbs'
// import { ArrowLeft, ArrowRight } from 'react-feather'
// import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label } from 'reactstrap'


// function ProfileDetails(props) {

//     // alert(active)
//     return (
//         <>
//             <Card>
//                 //Profile Details
//                 <CardHeader>
//                     <CardTitle tag='h4'>Profile Details</CardTitle>
//                 </CardHeader>

//                 <CardBody>
//                     <Form>
//                         <Row>
//                             <Col md='1' sm='12'>

//                             </Col>
//                             <Col md='11' sm='12'>
//                                 <Row>
//                                     <Col md='3' am='12'>
//                                         <FormGroup>
//                                             <Label for='firstName'>First Name</Label>
//                                             <Input type='text' name='name' id='firstName' placeholder='First Name' />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' am='12'>
//                                         <FormGroup>
//                                             <Label for='lastName'>Last Name</Label>
//                                             <Input type='text' name='name' id='lastName' placeholder='Last Name' />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='designation'>Designation</Label>
//                                             <Input type='select' name='designation' id='designation'>
//                                                 <option>Select...</option>
//                                             </Input>
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='policy'>Policy</Label>
//                                             <Input type='select' name='policy' id='policy'>
//                                                 <option>Select...</option>
//                                             </Input>
//                                         </FormGroup>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='employeeId'>Employee ID</Label>
//                                             <Input type='text' name='Employee ID' id='employeeId' />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='dateOfBirth'>Date Of Birth</Label>
//                                             <Input type='date' name='date of birth' id='dateOfBirth' />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='dateOfJoin'>Date Of Join</Label>
//                                             <Input type='date' name='date of join' id='dateOfJoin' />
//                                         </FormGroup>
//                                     </Col>
//                                     <Col md='3' sm='12'>
//                                         <FormGroup>
//                                             <Label for='email'>Email</Label>
//                                             <Input type='email' name='email' id='email' />
//                                         </FormGroup>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                         <Row>
//                             <Col md='3' sm='12'>
//                                 <FormGroup>
//                                     <Label for='address'>Address</Label>
//                                     <Input type='text' name='address' id='address' />
//                                 </FormGroup>
//                             </Col>
//                             <Col md='3' sm='12'>
//                                 <FormGroup>
//                                     <Label for='city'>City</Label>
//                                     <Input type='text' name='city' id='city' />
//                                 </FormGroup>
//                             </Col>
//                             <Col md='3' sm='12'>
//                                 <FormGroup>
//                                     <Label for='pincode'>Pincode</Label>
//                                     <Input type='text' name='pincode' id='pincode' />
//                                 </FormGroup>
//                             </Col>
//                             <Col md='3' sm='12'>
//                                 <FormGroup>
//                                     <Label for='gender'>Gender</Label>
//                                     <Input type='select' name='gender' id='gender'>
//                                         <option>Select...</option>
//                                     </Input>
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         <div className='d-flex justify-content-between'>
//                             <Button.Ripple color='secondary' className='btn-prev' outline disabled>
//                                 <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
//                                 <span className='align-middle d-sm-inline-block d-none'>Previous</span>
//                             </Button.Ripple>
//                             <Button.Ripple type='submit' color='primary' className='btn-next'>
//                                 <span className='align-middle d-sm-inline-block d-none'>Next</span>
//                                 <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
//                             </Button.Ripple>
//                         </div>
//                     </Form>
//                 </CardBody>
//             </Card>


//         </>
//     )
// }

// export default ProfileDetails

import * as yup from 'yup'
import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import Avatar from '@components/avatar'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight, User, Camera } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form, Label, Input, FormGroup, Row, Col, Button } from 'reactstrap'

const ProfileDetails = ({ stepper, type }) => {
    const SignupSchema = yup.object().shape({
        [`firstname-${type}`]: yup.string().required(),
        [`lastname-${type}`]: yup.string().required(),
        [`email-${type}`]: yup.string().email().required()
        // [`password-val-${type}`]: yup.string().required(),
        // 'confirm-password-val': yup
        //     .string()
        //     .required()
        //     .oneOf([yup.ref(`password-val-${type}`), null], 'Passwords must match')
    })

    const { register, errors, handleSubmit, trigger } = useForm({
        resolver: yupResolver(SignupSchema)
    })

    const onSubmit = () => {
        trigger()
        if (isObjEmpty(errors)) {
            stepper.next()
        }
    }

    return (
        <Fragment>
            <div className='content-header'>
                <h5 className='mb-0'>Profile Details</h5>
                <small className='text-muted'>Enter Your Profile Details.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md='2'>
                        <div className='avatar avatar-stats bg-light-secondary' style={{ padding: 35 }}>
                            <User />
                        </div>
                        <div>
                            <Avatar style={{ marginTop: -60, marginLeft: 60 }} color='primary' icon={<Camera size={14} />} />
                        </div>
                        <div className='pb-2'>
                            upload image
                        </div>
                    </Col>
                    <Col md='10'>
                        <Row>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`firstname-${type}`}>
                                    First Name
                                </Label>
                                <Input
                                    name={`firstname-${type}`}
                                    id={`firstname-${type}`}
                                    placeholder='First Name'
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`firstname-${type}`] })}
                                />
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`lastname-${type}`}>
                                    Lasr Name
                                </Label>
                                <Input
                                    name={`lastname-${type}`}
                                    id={`lastname-${type}`}
                                    placeholder='Last Name'
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`lastname-${type}`] })}
                                />
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`designation-${type}`}>
                                    Designation
                                </Label>
                                <Input
                                    type='select'
                                    name={`designation-${type}`}
                                    id={`designation-${type}`}
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`designation-${type}`] })}
                                >
                                    <option>Select...</option>
                                </Input>
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`policy-${type}`}>
                                    Policy
                                </Label>
                                <Input
                                    type='select'
                                    name={`policy-${type}`}
                                    id={`policy-${type}`}
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`policy-${type}`] })}
                                >
                                    <option>Select...</option>
                                </Input>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`employeeid-${type}`}>
                                    Employee Id
                                </Label>
                                <Input
                                    name={`employeeid-${type}`}
                                    id={`employeeid-${type}`}
                                    placeholder=''
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`employeeid-${type}`] })}
                                />
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`address-${type}`}>
                                    Date Of Birth
                                </Label>
                                <Input
                                    type='date'
                                    name={`dateofbirth-${type}`}
                                    id={`dateofbirth-${type}`}
                                    placeholder=''
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`dateofbirth-${type}`] })}
                                />
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`address-${type}`}>
                                    Date Of Join
                                </Label>
                                <Input
                                    type='date'
                                    name={`dateofjoin-${type}`}
                                    id={`dateofjoin-${type}`}
                                    placeholder=''
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`dateofjoin-${type}`] })}
                                />
                            </FormGroup>
                            <FormGroup tag={Col} md='3'>
                                <Label className='form-label' for={`address-${type}`}>
                                    Email
                                </Label>
                                <Input
                                    type='email'
                                    name={`email-${type}`}
                                    id={`email-${type}`}
                                    placeholder=''
                                    innerRef={register({ required: false })}
                                    className={classnames({ 'is-invalid': errors[`email-${type}`] })}
                                />
                            </FormGroup>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <FormGroup tag={Col} md='3'>
                        <Label className='form-label' for={`address-${type}`}>
                            Address
                        </Label>
                        <Input
                            type=''
                            name={`address-${type}`}
                            id={`address-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`address-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='3'>
                        <Label className='form-label' for={`city-${type}`}>
                            City
                        </Label>
                        <Input
                            type=''
                            name={`city-${type}`}
                            id={`city-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`city-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='3'>
                        <Label className='form-label' for={`pincode-${type}`}>
                            Pincode
                        </Label>
                        <Input
                            type=''
                            name={`pincode-${type}`}
                            id={`pincode-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`pincode-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='3'>
                        <Label className='form-label' for={`policy-${type}`}>
                            Gender
                        </Label>
                        <Input
                            type='select'
                            name={`gender-${type}`}
                            id={`gender-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`gender-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                </Row>
                <div className='d-flex justify-content-between'>
                    <Button.Ripple color='secondary' className='btn-prev' outline disabled>
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

export default ProfileDetails