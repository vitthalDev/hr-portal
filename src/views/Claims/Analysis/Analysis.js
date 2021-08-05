import { React, Fragment, useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { useRTL } from '@hooks/useRTL'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import DepartmentWiseClaims from './Assets/DepartmentWiseClaims'
import MostlyClaimedDisease from './Assets/MostlyClaimedDisease'
import FamilyWiseClaims from './Assets/FamilyWiseClaims'
import MonthWiseClaims from './Assets/MonthWiseClaims'
import AgeGroups from './Assets/AgeGroups'
import MonthlyClaims from './Assets/MonthlyClaims'

function Analysis(props) {
    const [isRtl, setIsRtl] = useRTL()
    const { colors } = useContext(ThemeColors)
    return (
        <>
            <Row>
                <Col md='6' sm='12'>
                    <MostlyClaimedDisease />
                </Col>
                <Col md='6' sm='12'>
                    <DepartmentWiseClaims direction={isRtl ? 'rtl' : 'ltr'} warning={colors.warning.main} />
                </Col>
            </Row>
            <Row>
                <Col md='6' sm='12'>
                    <FamilyWiseClaims direction={isRtl ? 'rtl' : 'ltr'} info={colors.info.main} />
                </Col>
                <Col>
                    <MonthWiseClaims direction={isRtl ? 'rtl' : 'ltr'} warning={colors.primary.main} />
                </Col>
            </Row>
            <Row>
                <Col md='6' sm='12'>
                    <AgeGroups direction={isRtl ? 'rtl' : 'ltr'} info={colors.warning.main} />
                </Col>
                <Col md='6' sm='12'>
                    <MonthlyClaims direction={isRtl ? 'rtl' : 'ltr'} />
                </Col>
            </Row>
        </>
    )
}

export default Analysis
