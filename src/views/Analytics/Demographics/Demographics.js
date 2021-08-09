import React from 'react'
import { Row, Col, Card, CardTitle, CardBody, Label, Input, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import * as Icons from 'react-feather'
import Avatar from '@components/avatar'
import DemographicsOne from './Data/DemographicsOne'
import DemographicsTwo from './Data/DemographicsTwo'
import DemographicsThree from './Data/DemographicsThree'

function Demographics(props) {
    const [active, setActive] = React.useState("one")
    return (
        <>
            <Row>
                <Col sm='12' md='12'>
                    <Card>
                        <CardTitle tag='h4' style={{ paddingLeft: 20, paddingTop: 20 }}>Filters</CardTitle>

                        <CardBody>
                            <Row>
                                <Col sm='12' md='4'>
                                    <Label for='policies'>Policies</Label>
                                    <Input type='select' name='policies' id='policies' />
                                </Col>
                                <Col md='5' sm='12'>

                                </Col>
                                <Col md='3' sm='12'>
                                    <Pagination className='d-flex justify-content-end mt-3'>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => setActive('one')} href='#'><Icons.ChevronsLeft size={18} /></PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => setActive('one')} href='#'><Icons.ChevronLeft size={18} /></PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className={active === 'one' ? 'active' : ''}>
                                            <PaginationLink onClick={() => setActive('one')} href='#'>1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className={active === 'two' ? 'active' : ''} >
                                            <PaginationLink onClick={() => setActive('two')} href='#'>2</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className={active === 'three' ? 'active' : ''} >
                                            <PaginationLink onClick={() => setActive('three')} href='#'>3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => setActive('three')} href='#'><Icons.ChevronRight size={18} /></PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => setActive('three')} href='#'><Icons.ChevronsRight size={18} /></PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='12' sm='12'>
                    {active === 'one' ? (
                        <DemographicsOne {...props} />
                    ) : null}

                    {active === 'two' ? (
                        <DemographicsTwo {...props} />
                    ) : null}

                    {active === 'three' ? (
                        <DemographicsThree {...props} />
                    ) : null}
                </Col>
            </Row>
        </>
    )
}

export default Demographics
