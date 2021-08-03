import { Fragment, useState } from "react"
import { Mail, MessageSquare, Grid } from "react-feather"
import * as Icon from 'react-feather'
import { Navbar, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom"
import Logo from '@src/assets/images/logo/eOxegen logo.png'


const CustomMenu = props => {
  const [activeDashboard, setActiveDashboard] = useState(false)
  const [aboutDashboard, setAbouDashboard] = useState(false)
  const [activePolicies, setActivePolicies] = useState(false)
  const [aboutPolicies, setAboutPolicies] = useState(false)
  const [activeEndorsement, setActiveEndorsement] = useState(false)
  const [aboutEndorsement, setAboutEndorsement] = useState(false)
  const [activeEmployees, setActiveEmployees] = useState(false)
  const [aboutEmployees, setAboutEmployees] = useState(false)
  const [activeChallenges, setActiveChallenges] = useState(false)
  const [aboutChallenges, setAboutChallenges] = useState(false)
  const [activeProducts, setActiveProducts] = useState(false)
  const [aboutProducts, setAboutProducts] = useState(false)
  const [activeClaims, setActiveClaims] = useState(false)
  const [aboutClaims, setAboutClaims] = useState(false)
  const [activeBills, setActiveBills] = useState(false)
  const [aboutBills, setAboutBills] = useState(false)
  const [activeAnalytics, setActiveAnalytics] = useState(false)
  const [aboutAnalytics, setAboutAnalytics] = useState(false)

  // console.log('Menu:', props)
  return (
    <Navbar>
      <Fragment>
        <NavItem>
          <div>
            <img src={Logo} style={{ height: 40, width: 120, marginBottom: 20, marginLeft: 20 }} />
          </div>
          <NavLink>
            <div
              style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: aboutDashboard ? 30 : 15, width: 230, height: 45 }}
              onClick={(e) => {
                setActiveDashboard(true)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(true)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activeDashboard ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard' style={{ color: activeDashboard ? 'white' : 'black' }}>
                <Icon.Grid size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 80 }}>Dashboard</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutPolicies ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(true)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(true)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activePolicies ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/policies' style={{ color: activePolicies ? 'white' : 'black' }}>
                <Icon.File size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 50 }}>Policies</span>
              </Link>
            </div>
          </NavLink>
          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutEndorsement ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(true)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(true)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activeEndorsement ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/endorsement' style={{ color: activeEndorsement ? 'white' : 'black' }}>
                <Icon.Archive size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 10 }}>Endorsement</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <Link to='/dashboard/employees' style={{ color: activeEmployees ? 'white' : 'black' }}>
              <div
                style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutEmployees ? 50 : 15, width: 200, borderRadius: 15 }}
                onClick={(e) => {
                  setActiveDashboard(false)
                  setActivePolicies(false)
                  setActiveEndorsement(false)
                  setActiveEmployees(true)
                  setActiveChallenges(false)
                  setActiveProducts(false)
                  setActiveClaims(false)
                  setActiveBills(false)
                  setActiveAnalytics(false)
                }}
                onMouseOver={(e) => {
                  setAbouDashboard(false)
                  setAboutPolicies(false)
                  setAboutEndorsement(false)
                  setAboutEmployees(true)
                  setAboutChallenges(false)
                  setAboutProducts(false)
                  setAboutClaims(false)
                  setAboutBills(false)
                  setAboutAnalytics(false)
                }}
                className={activeEmployees ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center  '}
              >

                <Icon.Users size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 30 }}>Employees</span>

              </div>
            </Link>
          </NavLink>

          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutClaims ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(true)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(true)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activeClaims ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='#' style={{ color: activeClaims ? 'white' : 'black' }}>
                <Icon.FilePlus size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 50 }}>Claims</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutChallenges ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(true)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(true)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activeChallenges ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='#' style={{ color: activeChallenges ? 'white' : 'black' }}>
                <Icon.Award size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 30 }}>Challenges</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutProducts ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(true)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(true)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(false)
              }}
              className={activeProducts ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='#' style={{ color: activeProducts ? 'white' : 'black' }}>
                <Icon.Package size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 50 }}>Products</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: aboutBills ? 50 : 15, width: 200, borderRadius: 15 }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(true)
                setActiveAnalytics(false)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(true)
                setAboutAnalytics(false)
              }}
              className={activeBills ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='#' style={{ color: activeBills ? 'white' : 'black' }}>
                <Icon.FileText size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 70 }}>Bills</span>
              </Link>
            </div>
          </NavLink>

          <NavLink>
            <div
              style={{
                paddingTop: 15, paddingBottom: 15, paddingLeft: aboutAnalytics ? 30 : 15, width: 200, borderRadius: 15
              }}
              onClick={(e) => {
                setActiveDashboard(false)
                setActivePolicies(false)
                setActiveEndorsement(false)
                setActiveEmployees(false)
                setActiveChallenges(false)
                setActiveProducts(false)
                setActiveClaims(false)
                setActiveBills(false)
                setActiveAnalytics(true)
              }}
              onMouseOver={(e) => {
                setAbouDashboard(false)
                setAboutPolicies(false)
                setAboutEndorsement(false)
                setAboutEmployees(false)
                setAboutChallenges(false)
                setAboutProducts(false)
                setAboutClaims(false)
                setAboutBills(false)
                setAboutAnalytics(true)
              }}
              className={activeAnalytics ? 'text-center colors-container bg-gradient-primary rounded text-black  d-flex align-items-center justify-content-center shadow' : 'text-center colors-container bg-gradient-light rounded text-black  d-flex align-items-center justify-content-center '}
            >
              <Link to='/dashboard/analytics' style={{ color: activeAnalytics ? 'white' : 'black' }}>
                <Icon.BarChart2 size={20} style={{ marginRight: 15 }} />
                <span style={{ marginInlineEnd: 70 }} >Analytics</span>
              </Link>
            </div>
          </NavLink>

        </NavItem>
      </Fragment>
    </Navbar >


  )
}

export default CustomMenu

