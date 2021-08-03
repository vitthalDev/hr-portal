import { Tab } from 'bootstrap'
import { React, useContext } from 'react'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Table } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
import FamilyMembersSession from '../assets/FamilyMembersSessions'
import EmployeeGender from '../assets/EmployeeGender'
import SpouseGender from '../assets/SpouseGender'
import ParentGender from '../assets/ParentGender'
import ChildrenGender from '../assets/ChildrenGender'

function DemographicsOne(props) {
    const context = useContext(ThemeColors)
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
        trackBgColor = '#e9ecef',
        labelColor = skin === 'dark' ? '#b4b7bd' : '#6e6b7b',
        tooltipShadow = 'rgba(0, 0, 0, 0.25)',
        gridLineColor = 'rgba(200, 200, 200, 0.2)',
        lineChartPrimary = '#666ee8',
        lineChartDanger = '#ff4961',
        warningColorShade = '#ffe802',
        warningLightColor = '#FDAC34',
        successColorShade = '#28dac6',
        primaryColorShade = '#836AF9',
        infoColorShade = '#299AFF',
        yellowColor = '#ffe800',
        greyColor = '#4F5D70',
        blueColor = '#2c9aff',
        blueLightColor = '#84D0FF',
        greyLightColor = '#EDF1F4'
    return (
        <>
            <Row>
                <Col md='7' sm='12'>
                    <Card className='p-1'>
                        <CardHeader>
                            <CardTitle tag='h4'>Composition Of covered members</CardTitle>
                        </CardHeader>

                        <CardBody>
                            <Table size='lg' responsive>
                                <thead>
                                    <tr>
                                        <th>RELATIONSHIP</th>
                                        <th>CURRENT MEMBERS</th>
                                        <th>INCEPTION MEMBERS</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12' style={{ height: 200 }}>
                    <FamilyMembersSession
                        primary={context.colors.primary.main}
                        warning={context.colors.warning.main}
                        danger={context.colors.danger.main}
                        success={context.colors.success.main}
                    />
                </Col>
            </Row>

            <Row>
                <Col md='7' sm='12'>
                    <Card className='p-1'>
                        <CardHeader>
                            <CardTitle tag='h4'>Gender Wise Composition of Covered Members</CardTitle>
                        </CardHeader>

                        <CardBody>
                            <Table size='lg' responsive>
                                <thead>
                                    <tr>
                                        <th>RELATIONSHIP</th>
                                        <th>CURRENT MEMBERS</th>
                                        <th>INCEPTION MEMBERS</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                    <tr>
                                        <td>Employee</td>
                                        <td>6680</td>
                                        <td>677</td>
                                        <td>3%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col md='5' sm='12' style={{ height: 200 }}>
                    <Card>
                        <EmployeeGender
                            primary='#84D0FF'
                            warning='#B2FFFF'
                            danger={context.colors.danger.main}
                            success={context.colors.success.main}
                        />
                        <SpouseGender
                            primary='#ebcd60'
                            warning='#c7ac4a'
                            danger={context.colors.danger.main}
                            success={context.colors.success.main}
                        />
                        <ParentGender
                            primary='#d13532'
                            warning='#db7472'
                        />
                        <ChildrenGender
                            primary='#8448d9'
                            warning='#a57be0'
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DemographicsOne
