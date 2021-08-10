import { React, Fragment, useState } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { ChevronRight } from 'react-feather'
import { Link } from 'react-router-dom'
import EmployeeInformation from './EmployeeProfile/EmployeeInformation'
import FamilyDetails from './EmployeesFamilyDetails/FamilyDetails'
import EmergencyContact from './EmployeeEmergencyContact/EmergencyContact'
import grid from '@src/assets/images/icons/grid.png'

const EmployeesNewUser = (props) => {
    const [active, setActive] = useState('profile')
    return (
        <>
            <div className='mt-1 mb-1'>
                <Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <Link to='/dashboard/employees'>Employees</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>New User</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </div>
            <Fragment>

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
