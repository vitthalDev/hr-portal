import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const MemberOne = ({ stepper, type }) => {
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
                <h5 className='mb-0'>Family Details</h5>
                <small>Enter Your Family Details.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='3'>
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
                    <FormGroup tag={Col} md='3'>
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
                    <FormGroup tag={Col} md='3'>
                        <Label className='form-label' for={`dateOfBirth-${type}`}>
                            Date Of Birth
                        </Label>
                        <Input
                            type='date'
                            name={`dateOfBirth-${type}`}
                            id={`dateOfBirth-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`dateOfBirth-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='3'>
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

export default MemberOne