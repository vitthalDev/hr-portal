import { React, Fragment, useState } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col } from 'reactstrap'

import UnpaidEndorsementDetail from './UnpaidEndorsementDetails/UnpaidEndorsementDetail'
import PaidEndorsementDetails from './PaidEndorsementDetails/PaidEndorsementDetails'

function NewEndorsement(props) {
    return (
        <>
            <Fragment>
                <Breadcrumbs breadCrumbTitle='Endorsement' breadCrumbParent='Endorsement' breadCrumbActive='New Endorsement' />
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
