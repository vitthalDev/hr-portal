import React from 'react'
import { Row, Col } from 'reactstrap'
import QuickAccess from './QuickAccess/QuickAccess'
import Filters from './Filters/Filters'
import Table from './Table/Table'

function EmployeesHome(props) {
    return (
        <>
            <Row>
                <Col md='12' am='12'>
                    <QuickAccess />
                </Col>
            </Row>
            <Row>
                <Col md='12'>
                    <Filters />
                </Col>
            </Row>
            <Row>
                <Col md='12'>
                    <Table />
                </Col>
            </Row>
        </>
    )
}

export default EmployeesHome
