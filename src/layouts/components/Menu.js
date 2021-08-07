import { Fragment, useState } from 'react'
import { Navbar, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom"
import Nav from 'reactstrap/lib/Nav'
import { indicatorsContainerCSS } from 'react-select/src/components/containers'
import { Icon } from 'leaflet'
import insurance from '@src/assets/images/icons/insurance.png'

function Menu(props) {
  const [active, setActive] = useState('dashboard')

  return (
    <>
      <Navbar>
        <Fragment>
          <NavItem>

            <NavLink>
              <div
                onClick={() => { setActive('dashboard') }}
                style={{ width: 200 }}
                className={active === 'dashboard' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard' style={{ color: active === 'dashboard' ? 'white' : 'black' }}>
                  <Icon.Grid size={20} />
                  <span>Dashboard</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('policies') }}
                style={{ width: 200 }}
                className={active === 'policies' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/policies' style={{ color: active === 'policies' ? 'white' : 'black' }}>
                  <img src={insurance} height='20' width='20' />
                  <span>Policies</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('endorsement') }}
                style={{ width: 200 }}
                className={active === 'endorsement' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/endorsement' style={{ color: active === 'endorsement' ? 'white' : 'black' }}>
                  <span>Endorsement</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('employees') }}
                style={{ width: 200 }}
                className={active === 'employees' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/employees' style={{ color: active === 'employees' ? 'white' : 'black' }}>
                  <span>Employees</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('claims') }}
                style={{ width: 200 }}
                className={active === 'claims' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/claims' style={{ color: active === 'claims' ? 'white' : 'black' }}>
                  <span>Claims</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('providers') }}
                style={{ width: 200 }}
                className={active === 'providers' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/providers' style={{ color: active === 'poviders' ? 'white' : 'black' }}>
                  <span>Providers</span>
                </Link>
              </div>
            </NavLink>

            <NavLink>
              <div
                onClick={() => { setActive('analytics') }}
                style={{ width: 200 }}
                className={active === 'analytics' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
              >
                <Link to='/dashboard/analytics' style={{ color: active === 'analytics' ? 'white' : 'black' }}>
                  <span>Analytics</span>
                </Link>
              </div>
            </NavLink>

          </NavItem>
        </Fragment>
      </Navbar>
    </>
  )
}

export default Menu
