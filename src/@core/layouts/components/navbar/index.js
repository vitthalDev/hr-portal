// ** React Imports
import { Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom'
import clockfiy from '@src/assets/images/icons/clockfiy.png'
import message from '@src/assets/images/icons/message.png'
// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'

// ** Custom Components
import NavbarBookmarks from './NavbarBookmarks'

// ** Third Party Components
import { Sun, Moon, Search, Calendar, MessageSquare } from 'react-feather'
import { NavItem, NavLink, Button, InputGroup, InputGroupAddon, Input, FormGroup, Row, Col } from 'reactstrap'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <NavbarBookmarks setMenuVisibility={setMenuVisibility} />
        {/* <Input className='bg-light-primary' style={{ borderRadius: 50 }} type='text' placeholder='Search...' setMenuVisibility={setMenuVisibility} />
        <Row>
          <Col md='12' sm='12'>
            <Input className='bg-light-primary' style={{ borderRadius: 50 }} type='text' placeholder='Search...' />
          </Col>
        </Row> */}
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        {/* <IntlDropdown />
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
        <NavbarSearch />
        {/* <CartDropdown /> */}
        {/* <NotificationDropdown />
        <UserDropdown /> */}
        <Link to='/dashboard/remainder'>
          <img src={clockfiy} style={{ height: 30, width: 25 }} />
        </Link>
        <Link to='/dashboard/chat' style={{ paddingLeft: 30 }}>
          <img src={message} style={{ height: 25, width: 25 }} />
        </Link>
        {/* <div style={{ paddingLeft: 20, color: 'red' }}>
          <NotificationDropdown />
        </div> */}
        <div style={{ paddingLeft: 20, color: 'gray' }}>
          <NotificationDropdown />
        </div>
        <div style={{ marginLeft: 50 }}>
          <UserDropdown />
        </div>
      </ul>
    </Fragment>
  )
}

export default ThemeNavbar
