import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import QuickAccess from './QuickAccess/QuickAccess'
import { Link } from 'react-router-dom'
import Filters from './Filters/Filters'
import Table from './Table/Table'
import grid from '@src/assets/images/icons/grid.png'

function EmployeesHome(props) {
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Employees</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <Row className='mt-1' >
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
