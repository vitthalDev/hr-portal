import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, Input } from 'reactstrap'

const Members = ({ stepper, type }) => {
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
                        <h5>Paid Endorsement Details</h5>
                        <small>Enter your paid endorsement details.</small>
                    </Col>
                    <Col lg='3'>
                        <span>Policy No. E01677637</span>
                    </Col>
                </Row>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`-${type}`}>
                            Name
                        </Label>
                        <Input
                            type='text'
                            name={`-${type}`}
                            id={`-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`nominee-${type}`}>
                            Relationship
                        </Label>
                        <Input
                            type='text'
                            name={`-${type}`}
                            id={`-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`-${type}`] })}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`-${type}`}>
                            Date Of Birth
                        </Label>
                        <Input
                            type='date'
                            name={`-${type}`}
                            id={`-${type}`}
                            placeholder=''
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`-${type}`] })}
                        />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label className='form-label' for={`nominee-${type}`}>
                            Phone No.
                        </Label>
                        <Input
                            type='phone'
                            name={`-${type}`}
                            id={`-${type}`}
                            innerRef={register({ required: false })}
                            className={classnames({ 'is-invalid': errors[`-${type}`] })}
                        />
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    {/* <Button.Ripple type='submit' color='warning' className='btn-next' style={{ marginLeft: 800 }}>
                        <span className='align-middle d-sm-inline-block d-none'>Save</span>
                        {/* <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight> 
                    </Button.Ripple> */}
                    <Button.Ripple type='submit' color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Next</span>
                        <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment >
    )
}

export default Members