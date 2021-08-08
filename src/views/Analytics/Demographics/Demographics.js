import React from 'react'
import { Row, Col, Card, CardTitle, CardBody, Label, Input } from 'reactstrap'
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
                                    <div className='bg-light-primary' style={{ width: 170, borderRadius: 50, marginTop: 20 }}>
                                        <Icons.ChevronLeft onClick={() => setActive('one')} style={{ paddingRight: 0, cursor: 'pointer' }} />
                                        <Avatar onClick={() => setActive('one')} color={active === 'one' ? 'primary' : ''} content='1' style={{ marginRight: 12, padding: 0 }} />
                                        <Avatar onClick={() => setActive('two')} color={active === 'two' ? 'primary' : ''} content='2' style={{ marginRight: 12, padding: 0 }} />
                                        <Avatar onClick={() => setActive('three')} color={active === 'three' ? 'primary' : ''} content='3' style={{ marginRight: 12, padding: 0 }} />
                                        <Icons.ChevronRight onClick={() => setActive('three')} style={{ marginLeft: -10, cursor: 'pointer' }} />
                                    </div>
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
