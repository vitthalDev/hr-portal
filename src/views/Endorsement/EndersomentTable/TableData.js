import { useContext } from 'react'
import { Table, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'

const EndorsementTableData = () => {
  const { colors } = useContext(ThemeColors)
  const [skin, setSkin] = useSkin(),
    pending = '#4F5D70'
  return (
    <Table size='md' responsive>
      <thead>
        <tr>
          <th>ENDORSEMENT NUMBER</th>
          <th>TYPE</th>
          <th>EMPLOYEE NAME</th>
          <th>SUBMISSION DATE</th>
          <th>REASON</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5645644464</td>
          <td>Paid</td>
          <td>Rahul Sharma</td>
          <td>29 Jan 2021</td>
          <td>Address Change</td>
          <td>
            <Badge color='success' pill className='badge-glow'>
              Accepted
            </Badge>
          </td>
        </tr>
        <tr>
          <td>476589435</td>
          <td>Paid</td>
          <td>Nikhil Singh</td>
          <td>25 Jan 2021</td>
          <td>Contact Info Update</td>
          <td>
            <Badge color='warning' pill className='badge-glow'>
              In-process
            </Badge>
          </td>
        </tr>
        <tr>
          <td>984757458</td>
          <td>Nill</td>
          <td>Rekha Sharma</td>
          <td>29 Jan 2021</td>
          <td>Add Spouse</td>
          <td>
            <Badge color='warning' pill className='badge-glow'>
              In-process
            </Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default EndorsementTableData