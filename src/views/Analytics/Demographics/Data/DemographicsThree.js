import { React, useContext } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import { useSkin } from '@hooks/useSkin'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import CompositionMembers from '../assets/CompositionMembers'
import CoveredChildren from '../assets/CoveredChildren'
import CoveredParents from '../assets/CoveredParents'

function DemographicsThree(props) {
    const [isRtl, setIsRtl] = useRTL()
    const { colors } = useContext(ThemeColors),
        [skin, setSkin] = useSkin(),
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
                <Col md='6' sm='12'>
                    <CompositionMembers
                        successColorShade={successColorShade}
                        labelColor={labelColor}
                        tooltipShadow={tooltipShadow}
                        gridLineColor={gridLineColor}
                    />
                </Col>
                <Col md='6' sm='12'>
                    <Card>
                        <CardBody>
                            <CoveredChildren direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CoveredParents direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default DemographicsThree
