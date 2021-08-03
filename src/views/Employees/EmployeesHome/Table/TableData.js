import { useContext } from 'react'
import { Row, Col, Table, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledTooltip } from 'reactstrap'
import { MoreVertical, Download, Edit, Trash, MessageCircle, Mail } from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-1.jpg'

const EmployeeTableData = () => {
    const { colors } = useContext(ThemeColors)
    const [skin, setSkin] = useSkin(),
        pending = '#4F5D70'
    return (
        <Table size='md' responsive>
            <thead>
                <tr>
                    <th>EMPLOYEE NAME</th>
                    <th>EMPLOYEE ID</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                    <th>DESIGNATION</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Avatar color='primary' content='N' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Nilhil D</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <span className='pr-1'><Avatar img={avatarImg} tag={Link} to={'/dashboard/employees/profile'} /></span>
                        <small tag={Link} to={'/dashboard/employees/profile'}><u>Rahul Sharma</u></small>
                    </td>
                    <td><span>TT-001</span></td>
                    <td>Rahul@gmail.com</td>
                    <td>9455465872</td>
                    <td>Tax Consultant</td>
                    <td style={{ cursor: 'pointer' }}>
                        <UncontrolledDropdown>
                            <DropdownToggle tag='span'>
                                <MoreVertical size={14} className='cursor-pointer' />
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                                    <Mail size={14} className='mr-50' />
                                    <span className='align-middle'>Email</span>
                                </DropdownItem>
                                <DropdownItem tag={Link} to={`/apps/invoice/edit/`} className='w-100'>
                                    <MessageCircle size={14} className='mr-50' />
                                    <span className='align-middle'>Whatsapp</span>
                                </DropdownItem>
                                <DropdownItem
                                    tag='a'
                                    href='/'
                                    className='w-100'
                                    onClick={e => {
                                        e.preventDefault()
                                        store.dispatch(deleteInvoice(row.id))
                                    }}
                                >
                                    <Edit size={14} className='mr-50' />
                                    <span className='align-middle'>Edit</span>
                                </DropdownItem>
                                <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                                    <Trash size={14} className='mr-50' />
                                    <span className='align-middle'>Delete</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='info' content='A' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Anjali Saxena</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>Article</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='primary' content='V' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Vishal Singh</u></small>
                    </td>
                    <td><span>TT-003</span></td>
                    <td>Vishal@gmail.com</td>
                    <td>8984658872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='success' content='A' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Anjali Saxena</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>Article</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='info' content='N' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Nilhil D</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='danger' content='V' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Vishal Singh</u></small>
                    </td>
                    <td><span>TT-003</span></td>
                    <td>Vishal@gmail.com</td>
                    <td>8984658872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='primary' content='V' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Vishal Singh</u></small>
                    </td>
                    <td><span>TT-003</span></td>
                    <td>Vishal@gmail.com</td>
                    <td>8984658872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='warning' content='A' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Anjali Saxena</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>Article</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='success' content='N' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Nilhil D</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
                <tr>
                    <td>
                        <Avatar color='success' content='N' style={{ marginRight: 12, padding: 2 }} />
                        <small><u>Nilhil D</u></small>
                    </td>
                    <td><span>TT-002</span></td>
                    <td>Nikhil@gmail.com</td>
                    <td>8655465872</td>
                    <td>GST Manager</td>
                    <td style={{ cursor: 'pointer' }}><MoreVertical size={14} className='mr-50' /></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default EmployeeTableData