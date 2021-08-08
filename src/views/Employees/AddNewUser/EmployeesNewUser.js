import { React, Fragment, useState } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, Button } from 'reactstrap'
import { ChevronRight } from 'react-feather'

import EmployeeInformation from './EmployeeProfile/EmployeeInformation'
import FamilyDetails from './EmployeesFamilyDetails/FamilyDetails'
import EmergencyContact from './EmployeeEmergencyContact/EmergencyContact'

const EmployeesNewUser = (props) => {
    const [active, setActive] = useState('profile')
    return (
        <>
            <Fragment>
                <Breadcrumbs breadCrumbTitle='Employees' breadCrumbParent='Employees' breadCrumbActive='New User' />
                <Row>
                    <Col>
                        <EmployeeInformation />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FamilyDetails />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EmergencyContact />
                    </Col>
                </Row>
            </Fragment>
        </>
    )
}

export default EmployeesNewUser
