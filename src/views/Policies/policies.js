import React from 'react'
import { Row, Col } from 'reactstrap'
import PoliciesQuickAccess from './PoliciesQuickAccess/PoliciesQuickAccess'
import PoliciesTable from './PoliciesTable/PoliciesTable'

function policies(props) {
    return (
        <>
            <Row>
                <Col>
                    <PoliciesQuickAccess />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PoliciesTable />
                </Col>
            </Row>
        </>
    )
}

export default policies
