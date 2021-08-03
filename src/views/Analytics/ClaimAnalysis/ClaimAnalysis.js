import React from 'react'
import { Row, Col, Card, CardTitle, CardBody, Label, Input } from 'reactstrap'
import * as Icons from 'react-feather'
import ClaimAnalysisOne from './Data/ClaimAnalysisOne'
import ClaimAnalysisTwo from './Data/ClaimAnalysisTwo'
import ClaimAnalysisThree from './Data/ClaimAnalysisThree'
import ClaimAnalysisFour from './Data/ClaimAnalysisFour'

function ClaimAnalysis(props) {
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
                                <Col md='2' sm='12'>

                                </Col>
                                <Col md='6' sm='12'>
                                    <div className='bg-light-primary' style={{ width: 200, borderRadius: 50, marginTop: 20, marginLeft: 250 }}>
                                        <Icons.ChevronLeft style={{ paddingRight: 5, cursor: 'pointer' }} />
                                        <small
                                            className={active === 'one' ? 'avatar avatar-stats p-50 m-0 bg-gradient-primary' : ''}
                                            style={{ paddingLeft: 15, paddingRight: 15, cursor: 'pointer' }}
                                            onClick={() => setActive('one')}
                                        >
                                            1
                                        </small>

                                        <small
                                            className={active === 'two' ? 'avatar avatar-stats p-50 m-0 bg-gradient-primary' : ''}
                                            style={{ paddingLeft: 15, paddingRight: 15, cursor: 'pointer' }}
                                            onClick={() => setActive('two')}
                                        >
                                            2
                                        </small>

                                        <small
                                            className={active === 'three' ? 'avatar avatar-stats p-50 m-0 bg-gradient-primary' : ''}
                                            style={{ paddingLeft: 15, paddingRight: 15, cursor: 'pointer' }}
                                            onClick={() => setActive('three')}
                                        >
                                            3
                                        </small>

                                        <small
                                            className={active === 'four' ? 'avatar avatar-stats p-50 m-0 bg-gradient-primary' : ''}
                                            style={{ paddingLeft: 15, paddingRight: 15, cursor: 'pointer' }}
                                            onClick={() => setActive('four')}
                                        >
                                            4
                                        </small>
                                        <Icons.ChevronRight style={{ paddingLeft: 5 }} />
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
                        <ClaimAnalysisOne {...props} />
                    ) : null}

                    {active === 'two' ? (
                        <ClaimAnalysisTwo {...props} />
                    ) : null}

                    {active === 'three' ? (
                        <ClaimAnalysisThree {...props} />
                    ) : null}
                    {active === 'four' ? (
                        <ClaimAnalysisFour {...props} />
                    ) : null}
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysis
