import AvatarGroup from '@components/avatar-group'
import Avatar from '@components/avatar'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
// import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
// import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
// import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import { MoreVertical, Edit, Trash, MapPin } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Media } from 'reactstrap'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-13.jpg'
import avatar4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import avatar5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar6 from '@src/assets/images/portrait/small/avatar-s-15.jpg'
import avatar7 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import avatar8 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
// const avatarGroupData1 = [
//   {
//     title: 'Melissa',
//     img: avatar1,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Jana',
//     img: avatar2,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Halla',
//     img: avatar3,
//     imgHeight: 22,
//     imgWidth: 22
//   }
// ]

// const avatarGroupData2 = [
//   {
//     title: 'Wing',
//     img: avatar1,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Octavia',
//     img: avatar2,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Benedict',
//     img: avatar3,
//     imgHeight: 22,
//     imgWidth: 22
//   }
// ]

// const avatarGroupData3 = [
//   {
//     title: 'Jade',
//     img: avatar1,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Alisa',
//     img: avatar2,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Alisa',
//     img: avatar3,
//     imgHeight: 22,
//     imgWidth: 22
//   }
// ]

// const avatarGroupData4 = [
//   {
//     title: 'Alexa',
//     img: avatar1,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Lee',
//     img: avatar2,
//     imgHeight: 22,
//     imgWidth: 22
//   },
//   {
//     title: 'Shellie',
//     img: avatar3,
//     imgHeight: 22,
//     imgWidth: 22
//   }
// ]

const TableSmall = () => {
  return (
    <Table size='sm' responsive>
      <thead>
        <tr>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, height: 40, color: '#757575' }}>Employee Name</th>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }}>Hospital Name</th>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }}>Designation</th>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }}>Admission Date</th>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }}>Estimated Discharge Date</th>
          <th className='font-weight-bold pt-1' style={{ fontSize: 10, color: '#757575' }}>Reason Of Admission</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: 60 }}>
          <td>
            <Media style={{ marginTop: 10 }}>
              <Avatar img={avatar1} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Rahul Saxena</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>All India Institute Of Medical Science</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Grant Road, Mumbai -400002</small>
          </td>
          <td>
            <h5>Manager</h5>
          </td>
          <td>
            20 jan 2021
          </td>
          <td>
            24 Jan 2021
          </td>
          <td>
            Cardiac Arrest
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <Media style={{ marginTop: 10 }} >
              <Avatar img={avatar2} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Nikhil D</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>Christian Medical College</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Charni Road, Mumbai -400001</small>
          </td>
          <td>
            <h5>tax Consultant</h5>
          </td>
          <td>
            5 jan 2021
          </td>
          <td>
            10 Jan 2021
          </td>
          <td>
            Fever
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <Media style={{ marginTop: 10 }}>
              <Avatar img={avatar3} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Pradeep Saxena</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>Tata Memoruial Hospital</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Manpada Road, Mumbai -400003</small>
          </td>
          <td>
            <h5>Designer</h5>
          </td>
          <td>
            10 jan 2021
          </td>
          <td>
            15 Jan 2021
          </td>
          <td>
            Malaria
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <Media style={{ marginTop: 10 }}>
              <Avatar img={avatar4} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Vishal Sahu</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>Lilavati Hospital</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Grant Road, Mumbai -400001</small>
          </td>
          <td>
            <h5>Senior manager</h5>
          </td>
          <td>
            20 jan 2021
          </td>
          <td>
            22 Jan 2021
          </td>
          <td>
            Fever
          </td>
        </tr>
        <tr style={{ height: 60 }}>
          <td>
            <Media style={{ marginTop: 10 }}>
              <Avatar img={avatar5} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Rahul Saxena</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>All India Institute Of Medical Science</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Charni Road, Mumbai -400001</small>
          </td>
          <td>
            <h5>Manager</h5>
          </td>
          <td>
            20 jan 2021
          </td>
          <td>
            24 Jan 2021
          </td>
          <td>
            Cardiac Arrest
          </td>
        </tr>
        <tr style={{ height: 40 }}>
          <td>
            <Media style={{ marginTop: 10 }}>
              <Avatar img={avatar6} />
              <Media body>
                <h5 style={{ fontSize: 10, padding: 10, color: '#9B9B9B' }}>Rahul Saxena</h5>
              </Media>
            </Media>
          </td>
          <td>
            <h5 style={{ fontSize: 12, marginBottom: -3 }}>All India Institute Of Medical Science</h5>
            <MapPin size='12' style={{ color: 'red', marginRight: 5 }} /><small>Manpada Road, Mumbai -400003</small>
          </td>
          <td>
            <h5>Manager</h5>
          </td>
          <td>
            20 jan 2021
          </td>
          <td>
            24 Jan 2021
          </td>
          <td>
            Cardiac Arrest
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableSmall
