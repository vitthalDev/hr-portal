import { Fragment, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { Label, FormGroup, Row, Col, Button, Form, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

const Documents = ({ stepper, type }) => {
    const { register, errors, handleSubmit, trigger } = useForm()
    const [showTicketNumber, setShowTicketNumber] = useState(false)
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
                    <Button.Ripple type='submit' color='primary' className='btn-next' onClick={() => setShowTicketNumber(!showTicketNumber)}>
                        <span className='align-middle d-sm-inline-block d-none'>Submit</span>
                        <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
                    </Button.Ripple>
                </div>
            </Form>

            <div>
                <Modal isOpen={showTicketNumber} toggle={() => setShowTicketNumber(!showTicketNumber)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setShowTicketNumber(!showTicketNumber)}>Endorsement Ticket No. 546545645</ModalHeader>
                    <ModalBody>
                        <div className='text-center p-3'>
                            Your Endorsement request submitted successfully
                        </div>
                    </ModalBody>
                </Modal>
            </div>

        </Fragment>
    )
}

export default Documents