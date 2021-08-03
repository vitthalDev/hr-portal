import React from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col } from 'reactstrap'
import Demographics from './Demographics/Demographics'
import ClaimAnalysis from './ClaimAnalysis/ClaimAnalysis'

function Analytics(props) {
    const [active, setActive] = React.useState("demographics")
    return (
        <>
            <Breadcrumbs breadCrumbTitle='Analytics' breadCrumbParent='Analytics' />
            <div className="row text-center" style={{ height: 45 }}>
                <div className="col-lg-2">
                    <div
                        className={
                            active === "demographics" ? "text-primary" : "text-black"
                        }
                        onClick={(e) => {
                            e.preventDefault()
                            setActive("demographics")
                        }}
                        style={{ cursor: "pointer", fontSize: 15 }}
                    >
                        <span>Demographics</span>
                    </div>
                    <div>
                        {active === "demographics" ? (
                            <i className="fas fa-caret-up text-primary fs-1"></i>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="col-lg-2">
                    <div
                        className={active === "claimAnalysis" ? "text-primary" : "text-black"}
                        onClick={(e) => {
                            e.preventDefault()
                            setActive("claimAnalysis")
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Claim Analysis</span>
                    </div>
                    <div>
                        {active === "claimAnalysis" ? (
                            <i className="fas fa-caret-up text-primary fs-1"></i>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>

            <Row>
                {active === 'demographics' ? (
                    <Col md='12' sm='12'>
                        <Demographics {...props} />
                    </Col>
                ) : null}

                {active === 'claimAnalysis' ? (
                    <Col md='12' sm='12'>
                        <ClaimAnalysis {...props} />
                    </Col>
                ) : null}
            </Row>
        </>
    )
}

export default Analytics
