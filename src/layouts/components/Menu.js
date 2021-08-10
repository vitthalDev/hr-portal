import { Fragment, useState, useEffect } from "react"
import { Mail, MessageSquare, Grid, Disc, X, Circle } from "react-feather"
import { Navbar, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom"
import grid from '@src/assets/images/icons/grid.png'
import gridWhite from '@src/assets/images/icons/gridWhite.png'
import Logo from '@src/assets/images/logo/eOxegen logo.png'
import insurance from '@src/assets/images/icons/insurance.png'
import insuranceWhite from '@src/assets/images/icons/insuranceWhite.png'
import verify from '@src/assets/images/icons/verify.png'
import verifyWhite from '@src/assets/images/icons/verifyWhite.png'
import businessman from '@src/assets/images/icons/businessman.png'
import businessmanWhite from '@src/assets/images/icons/businessmanWhite.png'
import claim from '@src/assets/images/icons/claim.png'
import claimWhite from '@src/assets/images/icons/claimWhite.png'
import placeholder from '@src/assets/images/icons/placeholder.png'
import placeholderWhite from '@src/assets/images/icons/placeholderWhite.png'
import analytics from '@src/assets/images/icons/analytics.png'
import analyticsWhite from '@src/assets/images/icons/analyticsWhite.png'

const Menu = props => {
  const [active, setActive] = useState('dashboard')

  // console.log('Menu:', props)
  return (
    <Navbar>
      <Fragment>
        <NavItem>

          <NavLink>
            <div
              onClick={() => { setActive('dashboard') }}
              style={{ width: 170, marginLeft: -5, marginBottom: 20, marginTop: 0 }}
              className={active === 'dashboard' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard' style={{ color: active === 'dashboard' ? 'white' : '#625F6E' }}>
                <img src={active === 'dashboard' ? gridWhite : grid} height='20' width='20' />
                <span style={{ paddingLeft: 15 }} >Dashboard</span>
              </Link>
            </div>
          </NavLink>

          <NavLink style={{ marginLeft: 0 }}>
            <div
              onClick={() => { setActive('policies') }}
              style={{ width: 200, marginLeft: -35, marginBottom: 20 }}
              className={active === 'policies' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/policies' style={{ color: active === 'policies' ? 'white' : '#625F6E' }}>
                <img src={active === 'policies' ? insuranceWhite : insurance} height='25' width='20' />
                <span style={{ paddingLeft: 15 }}>Policies</span>
              </Link>
            </div>
          </NavLink>

          <NavLink style={{ marginLeft: 0 }}>
            <div
              onClick={() => { setActive('endorsement') }}
              style={{ width: 200, marginLeft: -10, marginBottom: 20 }}
              className={active === 'endorsement' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/endorsement' style={{ color: active === 'endorsement' ? 'white' : '#625F6E' }}>
                <img src={active === 'endorsement' ? verifyWhite : verify} height='25' width='25' />
                <span style={{ paddingLeft: 15 }}>Endorsement</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('employees') }}
              style={{ width: 200, marginLeft: -22, marginBottom: 20 }}
              className={active === 'employees' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/employees' style={{ color: active === 'employees' ? 'white' : '#625F6E' }}>
                <img src={active === 'employees' ? businessmanWhite : businessman} height='25' width='25' />
                <span style={{ paddingLeft: 15 }}>Employees</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('claims') }}
              style={{ width: 200, marginLeft: -40, marginBottom: 20 }}
              className={active === 'claims' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/claims' style={{ color: active === 'claims' ? 'white' : '#625F6E' }}>
                <img src={active === 'claims' ? claimWhite : claim} height='25' width='20' />
                <span style={{ paddingLeft: 15 }}>Claims</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('providers') }}
              style={{ width: 200, marginLeft: -30, marginBottom: 20 }}
              className={active === 'providers' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/providers' style={{ color: active === 'providers' ? 'white' : '#625F6E' }}>
                <img src={active === 'providers' ? placeholderWhite : placeholder} height='25' width='20' />
                <span style={{ paddingLeft: 15 }}>Providers</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              onClick={() => { setActive('analytics') }}
              style={{ width: 200, marginLeft: -30, marginBottom: 20 }}
              className={active === 'analytics' ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/analytics' style={{ color: active === 'analytics' ? 'white' : '#625F6E' }}>
                <img src={active === 'analytics' ? analyticsWhite : analytics} height='25' width='20' />
                <span style={{ paddingLeft: 15 }}>Analytics</span>
              </Link>
            </div>
          </NavLink>

        </NavItem>
      </Fragment>
    </Navbar >


  )
}

export default Menu
