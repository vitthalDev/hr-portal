import { React, useContext } from 'react'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table, Progress } from 'reactstrap'
import AverageAge from '../assets/AverageAge'
import CoveredEmployees from '../assets/CoveredEmployees'
import CoveredSpouse from '../assets/CoveredSpouses'

function DemographicsTwo(props) {
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
                    <AverageAge
                        direction={isRtl ? 'rtl' : 'ltr'}
                        warning={colors.warning.main}
                    />
                </Col>
                <Col md='5' sm='12'>
                    <Card>
                        <CardBody>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Spouse Ratio</h5>
                                <span>1:0.80</span>
                                <Progress className='avg-session-progress  progress-bar-warning mt-25' value='80' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Child Ratio</h5>
                                <span>1:1.05</span>
                                <Progress className='avg-session-progress  progress-bar-primary mt-25' value='70' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee Parent Ratio</h5>
                                <span>1:1.46</span>
                                <Progress className='avg-session-progress  progress-bar-info mt-25' value='80' />
                            </div>
                            <div style={{ padding: 20 }}>
                                <h5>Employee All Department</h5>
                                <span>1:3.30</span>
                                <Progress className='avg-session-progress  progress-bar-warning mt-25' value='80' />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='5'>
                    <Card>
                        <Table size='sm' responsive style={{ height: '100vh' }}>
                            <thead>
                                <tr >
                                    <th style={{ padding: 10 }}>AGE BAND</th>
                                    <th style={{ padding: 10 }}>EMPLOYEE</th>
                                    <th style={{ padding: 10 }}>SPOUSE</th>
                                    <th style={{ padding: 10 }}>CHILD</th>
                                    <th style={{ padding: 10 }}>PARENT</th>
                                    <th style={{ padding: 10 }}>GRAND TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ height: 60 }}>
                                    <td>0 - 18 Years</td>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>517</td>
                                    <td>-</td>
                                    <td>523</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>9 - 25 Years</td>
                                    <td>63</td>
                                    <td>52</td>
                                    <td>182</td>
                                    <td>-</td>
                                    <td>297</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>26 - 35 Years</td>
                                    <td>270</td>
                                    <td>203</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>473</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>36 - 45 Years</td>
                                    <td>116</td>
                                    <td>130</td>
                                    <td>-</td>
                                    <td>119</td>
                                    <td>265</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>46 - 55 Years</td>
                                    <td>157</td>
                                    <td>115</td>
                                    <td>-</td>
                                    <td>269</td>
                                    <td>541</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>56 - 65 Years</td>
                                    <td>61</td>
                                    <td>28</td>
                                    <td>-</td>
                                    <td>393</td>
                                    <td>482</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>66 - 70 Years</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>105</td>
                                    <td>105</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>71 - 75 Years</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>103</td>
                                    <td>103</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>76 - 79 Years</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>41</td>
                                    <td>41</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>80 Yaers And Above</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>43</td>
                                    <td>43</td>
                                </tr>
                                <tr style={{ height: 60 }}>
                                    <td>Grand Total</td>
                                    <td>668</td>
                                    <td>533</td>
                                    <td>699</td>
                                    <td>973</td>
                                    <td>2873</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
                <Col md='5' sm='12'>
                    <Card>
                        <CardBody>
                            <CoveredEmployees direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                            <CoveredSpouse direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DemographicsTwo
