import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import { Circle } from 'react-feather'
import { Tab } from 'bootstrap'
import ClaimRatios from '../Assets/ClaimRatios'

function ClaimAnalysisOne(props) {
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
                            <CardTitle tag='h6'>Status wise Claim Summary & Claim Ratios</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table size='lg' responsive>
                                <thead>
                                    <tr>
                                        <th>CLAIM STATUS</th>
                                        <th>NO OF CLAIMS</th>
                                        <th>CLAIM COST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Settled</td>
                                        <td>20</td>
                                        <td>867,434</td>
                                    </tr>
                                    <tr>
                                        <td>Outstanding</td>
                                        <td>10</td>
                                        <td>457,578</td>
                                    </tr>
                                    <tr>
                                        <td>Cashless Receivedpending for settlement</td>
                                        <td>15</td>
                                        <td>557,383</td>
                                    </tr>
                                    <tr>
                                        <td>Rejected</td>
                                        <td>04</td>
                                        <td>84,484</td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td>52</td>
                                        <td>1,993,925</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    <div>
                        <ClaimRatios direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                    </div>
                </Col>
                <Col md='5' sm='12'>
                    <Card>
                        <Table size='lg' responsive style={{ height: '90vh' }}>
                            <thead>
                                <tr>
                                    <th>PARTICULARS</th>
                                    <th>VALUES</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Data as on</td>
                                    <td>05 Aug 2015</td>
                                </tr>
                                <tr>
                                    <td>Policy Inseption Date</td>
                                    <td>01 MAy 2015</td>
                                </tr>
                                <tr>
                                    <td>Policy Expiry Date</td>
                                    <td>30 April 2016</td>
                                </tr>
                                <tr>
                                    <td>Total No. of Days from policy Inception</td>
                                    <td>96</td>
                                </tr>
                                <tr>
                                    <td>Total Claim Cost(Total Settled Amt + Total Claimed Amt for Outstanding)</td>
                                    <td>1,909,138</td>
                                </tr>
                                <tr>
                                    <td>Total Premium Paid Til DAte(Exclusive of Taxes)</td>
                                    <td>6,586,762</td>
                                </tr>
                                <tr>
                                    <td>Earned Premium as on Date</td>
                                    <td>1,732,409</td>
                                </tr>
                                <tr>
                                    <td>8End of Policy Claim Cost</td>
                                    <td>7,557,005</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
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
                                    End of Policy (EOP) clam cost is claculated at 380 days
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    Claimed amounts are taken as claim cost for outstanding, Cashless received pending for settlement an drejected claims
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    In sebsquent slides, only settled, outstanding an dCashless received pending for settlement claims are considered
                                </span>
                            </div>
                            <div style={{ padding: 5 }}>
                                <Circle className='bg-secondary mr-1' style={{ borderRadius: 50 }} size={14} />
                                <span>
                                    All amounts are in INR
                                </span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ClaimAnalysisOne
