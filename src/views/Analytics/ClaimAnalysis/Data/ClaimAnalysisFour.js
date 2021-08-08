import { React } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import { useRTL } from '@hooks/useRTL'
import ClaimCause from '../Assets/ClaimCause'

function ClaimAnalysisFour(props) {
    const [isRtl, setIsRtl] = useRTL()
    return (
        <>
            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h5'>Courses of Claims</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr style={{ height: 50 }}>
                                        <th>DISEASE CATEGORY</th>
                                        <th>NO. OF CLAIMS</th>
                                        <th>CLAIM COST</th>
                                        <th>NO. OF CLAIMS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of the digestive system</td>
                                        <td>12</td>
                                        <td>428062</td>
                                        <td>25%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of the genitourinay system</td>
                                        <td>7</td>
                                        <td>336039</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of the circulatory system</td>
                                        <td>5</td>
                                        <td>303275</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of respiratory system</td>
                                        <td>5</td>
                                        <td>241469</td>
                                        <td>6%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Injury, poisining and certain other consequences of external causes</td>
                                        <td>3</td>
                                        <td>218969</td>
                                        <td>6%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Pregnancy, Childbirth and puerperium</td>
                                        <td>5</td>
                                        <td>4454218</td>
                                        <td>11%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>disease of the eye and adnexa</td>
                                        <td>2</td>
                                        <td>5548215</td>
                                        <td>4%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>symptoms, signs and abdominal clinical and laboratory findings, not elsewhwre classified</td>
                                        <td>5</td>
                                        <td>4445641</td>
                                        <td>10%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Certain Infectious and parasitic diseases</td>
                                        <td>2</td>
                                        <td>79654412</td>
                                        <td>4%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Factors influencing health status and contact with health services</td>
                                        <td>1</td>
                                        <td>1964254</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Endocrine, nutritional and metabolic diseases</td>
                                        <td>1</td>
                                        <td>89565</td>
                                        <td>2%</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Grand Total</td>
                                        <td>48</td>
                                        <td>7909138</td>
                                        <td>100%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h4'>Composition of Covered Members</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <thead>
                                    <tr style={{ height: 50 }}>
                                        <th>DISEASE CATEGORY</th>
                                        <th>NO. OF CLAIMS</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of digestive system</td>
                                        <td>04</td>
                                        <td>8754755</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of circulatory system</td>
                                        <td>02</td>
                                        <td>8855654</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Injury, poisining and certain other consequences of external causes</td>
                                        <td>01</td>
                                        <td>4547775</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of the genitourinay system</td>
                                        <td>04</td>
                                        <td>3465456</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Disease of respiratory system</td>
                                        <td>01</td>
                                        <td>4857445</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Factors inlfuencing health status and contact with health services</td>
                                        <td>01</td>
                                        <td>147834</td>
                                    </tr>
                                    <tr style={{ height: 60 }}>
                                        <td>Grand Total</td>
                                        <td>10</td>
                                        <td>534388803</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md='12' sm='12'>
                    <ClaimCause direction={isRtl ? 'rtl' : 'ltr'} />
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysisFour
