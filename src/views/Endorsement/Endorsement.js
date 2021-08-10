import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import EndorsementQuickAccess from '../Endorsement/EndorsementQuickAccess/EndorsementQuickAccess'
import Filters from './EndorsementFilter/Filter'
import { Link } from 'react-router-dom'
import EndorsementCharts from '../Endorsement/EndorsementCharts/EndorsementCharts'
import EndorsementTable from '../Endorsement/EndersomentTable/EndorsementTable'
import grid from '@src/assets/images/icons/grid.png'

function Endorsement(props) {
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Endorsement</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <Row className='mt-1'>
                <Col md='12' sm='12'>
                    <EndorsementQuickAccess />
                </Col>
            </Row>
            <Row>
                <Col md='12' sm='12'>
                    <Filters />
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
