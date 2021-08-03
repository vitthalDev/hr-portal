import React from 'react'
import { Row, Col } from 'reactstrap'
import EndorsementQuickAccess from '../Endorsement/EndorsementQuickAccess/EndorsementQuickAccess'
import EndorsementCharts from '../Endorsement/EndorsementCharts/EndorsementCharts'
import EndorsementTable from '../Endorsement/EndersomentTable/EndorsementTable'

function Endorsement(props) {
    return (
        <>
            <Row>
                <Col md='12' sm='12'>
                    <EndorsementQuickAccess />
                </Col>
            </Row>
            <Row>
                <Col md='12' sm='12'>
                    <EndorsementCharts />
                </Col>
            </Row>
            <Row>
                <Col md='12' sm='12'>
                    <EndorsementTable />
                </Col>
            </Row>
        </>
    )
}

export default Endorsement
