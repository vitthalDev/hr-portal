import { Fragment, useState } from 'react'
import * as Icon from 'react-feather'
import { Navbar, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import NotificationDropdown from '../../@core/layouts/components/navbar/NotificationDropdown'
import UserDropdown from '../../@core/layouts/components/navbar/UserDropdown'
import NavbarSearch from '../../@core/layouts/components/navbar/NavbarSearch'
// import ModalBasic from '../../views/components/modal/ModalBasic'

const CustomNavbar = props => {
  const history = useHistory()
  console.log('Navbar:', props)
  return (
    <>
      <Navbar>
        <Fragment>
          <div style={{ marginBottom: -50, paddingBottom: 10 }}>
            {/* <Icon.Search size={21} /> */}
            <InputGroup className='input-group-merge mb-0' >
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Icon.Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder='Type in to search...' />
            </InputGroup>
          </div>
          <ul className='nav navbar-nav d-flex align-items-center' style={{ alignContent: 'flex-end', marginLeft: 550 }} >
            {/* <div style={{ color: 'green' }}>
              <NavbarSearch />
              <Icon.Search size={21} />
            </div> */}
            <div
              style={{ paddingLeft: 20 }}
            >
              <Link to='/dashboard/remainder'>
                <Icon.Calendar style={{ color: 'green' }} size={21} />
              </Link>
            </div>
            <div
              style={{ paddingLeft: 30 }}

            >
              <Link to='/dashboard/chat'>
                <Icon.MessageSquare style={{ color: 'green' }} size={21} />
              </Link>
            </div>
            <div style={{ paddingLeft: 20, color: 'green' }}>
              <NotificationDropdown />
            </div>
            <div style={{ marginLeft: 50 }}>
              <UserDropdown />
            </div>
          </ul>
        </Fragment>
      </Navbar>

    </>
  )
}

export default CustomNavbar
