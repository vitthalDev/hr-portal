import { React, Fragment, useState } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import UnpaidEndorsementDetail from './UnpaidEndorsementDetails/UnpaidEndorsementDetail'
import PaidEndorsementDetails from './PaidEndorsementDetails/PaidEndorsementDetails'
import grid from '@src/assets/images/icons/grid.png'

function NewEndorsement(props) {
    return (
        <>
            <div className='mt-1 mb-1'>
                <Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem >
                            <Link to='/dashboard/endorsement'>Endorsement</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>New Endorsement</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </div>
            <Fragment>
                <Row>
                    <Col>
                        <UnpaidEndorsementDetail />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <PaidEndorsementDetails />
                    </Col>
                </Row>
            </Fragment>
        </>
    )
}

export default NewEndorsement
