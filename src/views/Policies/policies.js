import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import PoliciesQuickAccess from './PoliciesQuickAccess/PoliciesQuickAccess'
import PoliciesTable from './PoliciesTable/PoliciesTable'
import { Link } from 'react-router-dom'
import grid from '@src/assets/images/icons/grid.png'

function policies(props) {
    return (
        <>
            <div className='mt-1 mb-1'>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Policies</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <Row>
                <Col className='mt-1'>
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
