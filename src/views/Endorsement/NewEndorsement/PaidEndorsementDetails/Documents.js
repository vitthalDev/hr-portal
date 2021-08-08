import { Fragment } from 'react'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, CustomInput } from 'reactstrap'

const Documents = ({ stepper, type }) => {
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
                        <Label for='exampleCustomFileBrowser'>Document 1</Label>
                        <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label for='exampleCustomFileBrowser'>Document 2</Label>
                        <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup tag={Col} md='6'>
                        <Label for='exampleCustomFileBrowser'>Document 3</Label>
                        <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
                    <FormGroup tag={Col} md='6'>
                        <Label for='exampleCustomFileBrowser'>Document 4</Label>
                        <CustomInput type='file' id='exampleCustomFileBrowser' name='customFile' />
                    </FormGroup>
                </Row>

                <div className='d-flex justify-content-between'>
                    <Button.Ripple type='submit' color='primary' className='btn-next'>
                        <span className='align-middle d-sm-inline-block d-none'>Submit</span>
                        <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                    </Button.Ripple>
                </div>
            </Form>
        </Fragment>
    )
}

export default Documents