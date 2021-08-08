import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const Forms = ({ stepper, type }) => {
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
                <Row>
                    <Col lg='9'>
                        <h5>Upload Documents</h5>
                        <small>Upload Your unpaid endorsement details.</small>
                    </Col>
                    <Col lg='3'>
                        <span>Policy No. E01677637</span>
                    </Col>
                </Row>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`PolicyHolderName-${type}`}>
                            Policy Holder Name
                        </Label>
                        <Input
                            type='text'
                            name={`PolicyHolderName-${type}`}
                            id={`PolicyHolderName-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`PolicyHolderName-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`date-${type}`}>
                            Today's Date
                        </Label>
                        <Input
                            type='date'
                            name={`date-${type}`}
                            id={`todaysDate-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`date-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`phoneNumber-${type}`}>
                            Phone No.
                        </Label>
                        <Input
                            type='mobile'
                            name={`phoneNumber-${type}`}
                            id={`phoneNumber-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`phoneNumber-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`email-${type}`}>
                            Email
                        </Label>
                        <Input
                            type='email'
                            name={`email-${type}`}
                            id={`email-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`email-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`address-${type}`}>
                            Address
                        </Label>
                        <Input
                            type='text'
                            name={`address-${type}`}
                            id={`address-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`address-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`city-${type}`}>
                            City
                        </Label>
                        <Input
                            type='city'
                            name={`city-${type}`}
                            id={`city-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`city-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`pincode-${type}`}>
                            Pincode
                        </Label>
                        <Input
                            type='pincode'
                            name={`pincode-${type}`}
                            id={`pincode-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`pincode-${type}`] })}
                        />
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple type='submit' color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Next</span>
                        <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default Forms