import { React, Fragment } from 'react'
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Menu } from 'react-feather'
import { Link } from 'react-router-dom'
import CalendarComponent from '../../apps/calendar/index'

function Remainder(props) {
    return (
        <>
            <Row>
                <Fragment>
                    <Breadcrumb listClassName='breadcrumb-slash'>
                        <BreadcrumbItem>
                            <Menu />
                            <Link to='/dashboard'>Dashboard</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            <span>Remainder</span>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Fragment>
            </Row>
            <CalendarComponent />
        </>
    )
}

export default Remainder
