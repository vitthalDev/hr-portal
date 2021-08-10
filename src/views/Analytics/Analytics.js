import React from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import Demographics from './Demographics/Demographics'
import ClaimAnalysis from './ClaimAnalysis/ClaimAnalysis'
import grid from '@src/assets/images/icons/grid.png'

function Analytics(props) {
    const [active, setActive] = React.useState("demographics")
    return (
        <>
            <div style={{ marginLeft: 5 }}>
                <React.Fragment>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/'> <img src={grid} height='20' width='20' /> </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active >
                            <span>Analytics</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </React.Fragment>
            </div>
            <div className="row text-center mt-1" style={{ height: 45 }}>
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
