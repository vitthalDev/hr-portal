import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const ContactOne = ({ stepper, type }) => {
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
                <h5 className='mb-0'>Emergency Contacts</h5>
                <small>Enter Your Emergency Contact Details.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='4'>
                        <Label className='form-label' for={`nationality-${type}`}>
                            Name
                        </Label>
                        <Input
                            type='text'
                            name={`name-${type}`}
                            id={`name-${type}`}
                            placeholder=' Name'
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`name-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='4'>
                        <Label className='form-label' for={`religion-${type}`}>
                            Relation
                        </Label>
                        <Input
                            type='select'
                            name={`relation-${type}`}
                            id={`relation-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`relation-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
                    </FormGroup>
                    <FormGroup tag={Col} md='4'>
                        <Label className='form-label' for={`phonenumber-${type}`}>
                            Contact
                        </Label>
                        <Input
                            type='phone'
                            name={`contact-${type}`}
                            id={`contact-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`contact-${type}`] })}
                        />
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple type='submit' color='warning' className='btn-next' style={{ marginLeft: 800 }}>
                        <span className='align-middle d-sm-inline-block d-none'>Save</span>
                        {/* <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight> */}
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

export default ContactOne