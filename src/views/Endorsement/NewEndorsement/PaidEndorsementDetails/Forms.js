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
                <h5 className='mb-0'>Paid Endorsement Details</h5>
                <small>Enter Your Paid Endorsement Details.</small>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`premiumFrequency-${type}`}>
                            Premiumm Frequency
                        </Label>
                        <Input
                            type='text'
                            name={`premiumFrequency-${type}`}
                            id={`premiumFrequency-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`premiumFrequency-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`nominee-${type}`}>
                            Nominee
                        </Label>
                        <Input
                            type=''
                            name={`nominee-${type}`}
                            id={`nominee-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`nominee-${type}`] })}
                        >
                            <option>Select...</option>
                        </Input>
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

export default Forms