import { Fragment, useState } from "react"
import { Mail, MessageSquare, Grid } from "react-feather"
import { Navbar, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom"
import grid from '@src/assets/images/icons/grid.png'
import Logo from '@src/assets/images/logo/eOxegen logo.png'
import insurance from '@src/assets/images/icons/insurance.png'
import verify from '@src/assets/images/icons/verify.png'
import businessman from '@src/assets/images/icons/businessman.png'
import claim from '@src/assets/images/icons/claim.png'
import placeholder from '@src/assets/images/icons/placeholder.png'
import analytics from '@src/assets/images/icons/analytics.png'

const Menu = props => {
  const [active, setActive] = useState('dashboard')

  // console.log('Menu:', props)
  return (
    <Navbar>
      <Fragment>
        <NavItem>
          <div>
            <img src={Logo} style={{ height: 40, width: 120, marginBottom: 20, marginLeft: 50, marginTop: 20 }} />
          </div>

          <NavLink>
            <div
              onClick={() => { setActive('dashboard') }}
              style={{ width: 200, marginLeft: -10 }}
              className={active === 'dashboard' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard' style={{ color: active === 'dashboard' ? 'white' : '#625F6E' }}>
                <img src={grid} height='20' width='20' />
                <span style={{ paddingLeft: 5 }} >Dashboard</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('policies') }}
              style={{ width: 200, marginLeft: -25 }}
              className={active === 'policies' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/policies' style={{ color: active === 'policies' ? 'white' : '#625F6E' }}>
                <img src={insurance} height='25' width='20' />
                <span style={{ paddingLeft: 5 }}>Policies</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('endorsement') }}
              style={{ width: 200, marginLeft: -3 }}
              className={active === 'endorsement' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/endorsement' style={{ color: active === 'endorsement' ? 'white' : '#625F6E' }}>
                <img src={verify} height='25' width='25' />
                <span style={{ paddingLeft: 5 }}>Endorsement</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('employees') }}
              style={{ width: 200, marginLeft: -12 }}
              className={active === 'employees' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/employees' style={{ color: active === 'employees' ? 'white' : '#625F6E' }}>
                <img src={businessman} height='25' width='25' />
                <span style={{ paddingLeft: 5 }}>Employees</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('claims') }}
              style={{ width: 200, marginLeft: -28 }}
              className={active === 'claims' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/claims' style={{ color: active === 'claims' ? 'white' : '#625F6E' }}>
                <img src={claim} height='25' width='20' />
                <span style={{ paddingLeft: 5 }}>Claims</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('providers') }}
              style={{ width: 200, marginLeft: -18 }}
              className={active === 'providers' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/providers' style={{ color: active === 'providers' ? 'white' : '#625F6E' }}>
                <img src={placeholder} height='25' width='20' />
                <span style={{ paddingLeft: 5 }}>Providers</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('analytics') }}
              style={{ width: 200, marginLeft: -18 }}
              className={active === 'analytics' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/analytics' style={{ color: active === 'analytics' ? 'white' : '#625F6E' }}>
                <img src={analytics} height='25' width='20' />
                <span style={{ paddingLeft: 5 }}>Analytics</span>
              </Link>
            </div>
          </NavLink>

        </NavItem>
      </Fragment>
    </Navbar >


  )
}

export default Menu
