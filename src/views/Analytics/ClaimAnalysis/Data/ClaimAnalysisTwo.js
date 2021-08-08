import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import { Circle } from 'react-feather'
import ClaimRatioProjection from '../Assets/ClaimRatioProjection'
import ClaimCostAverage from '../Assets/ClaimCostAverage'


function ClaimAnalysisTwo(props) {
    const [isRtl, setIsRtl] = useRTL()
    const context = useContext(ThemeColors)
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
        trackBgColor = '#e9ecef',
        labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
        tooltipShadow = 'rgba(0, 0, 0, 0.25)',
        gridLineColor = 'rgba(200, 200, 200, 0.2)',
        lineChartPrimary = '#666ee8',
        lineChartDanger = '#ff4961',
        warningColorShade = '#ffe802'
    return (
        <>
            <Row>
                <Col md='7' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h6'>Claim Incidences Ratio & Projection</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='sm' responsive style={{ height: 250 }}>
                                <thead>
                                    <tr>
                                        <th>RELATION</th>
                                        <th>CURRENT MEMBERS</th>
                                        <th>EOP CLAIMS</th>
                                        <th>CURRENT INCIDENCES</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td>10</td>
                                        <td>38</td>
                                        <td>1%</td>
                                        <td>5%</td>
                                    </tr>
                                    <tr>
                                        <td>Spouse</td>
                                        <td>18</td>
                                        <td>68</td>
                                        <td>3%</td>
                                        <td>12%</td>
                                    </tr>
                                    <tr>
                                        <td>Child</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0%</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Parent</td>
                                        <td>20</td>
                                        <td>76</td>
                                        <td>2%</td>
                                        <td>7%</td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td>48</td>
                                        <td>183</td>
                                        <td>2%</td>
                                        <td>6%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimRatioProjection
                        direction={isRtl ? 'rtl' : 'ltr'}
                        warning={colors.warning.main}
                    />
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='12'>
                    <Card>
                        <Table size='lg' responsive style={{ height: 390 }}>
                            <thead>
                                <tr>
                                    <th>CLAIM STATUS</th>
                                    <th>NO. OF CLAIMS</th>
                                    <th>CLAIM COST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Employee</td>
                                    <td>10</td>
                                    <td>534,005</td>
                                </tr>
                                <tr>
                                    <td>Spouse</td>
                                    <td>18</td>
                                    <td>670,821</td>
                                </tr>
                                <tr>
                                    <td>Child</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Parent</td>
                                    <td>20</td>
                                    <td>704,321</td>
                                </tr>
                                <tr>
                                    <td>Grand Total</td>
                                    <td>48</td>
                                    <td>1,909,138</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <ClaimCostAverage direction={isRtl ? 'rtl' : 'ltr'} />
                </Col>
            </Row>

            <Row>
                <Col md='12' sm='12'>
                    <Card>
                        <CardHeader>
                            <CardTitle tag='h5'>Notes</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Parent are the highest claming group in terms of both no. of claims and claim cost
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Average claim cost for Heinze India Pvt. Ltd. as a whole is above industry
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Onl;y settled claims arae considered for average claim cost
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysisTwo
