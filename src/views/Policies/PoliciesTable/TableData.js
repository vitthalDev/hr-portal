import { useContext } from 'react'
import { Table, Badge } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { useSkin } from '@hooks/useSkin'
import { Download } from 'react-feather'

const PoliciesTableData = () => {
    const { colors } = useContext(ThemeColors)
    const [skin, setSkin] = useSkin(),
        pending = '#4F5D70'
    return (
        <Table size='md' responsive>
            <thead>
                <tr>
                    <th>POLICIY NAME</th>
                    <th>MEMBERS</th>
                    <th>TYPE</th>
                    <th>INCEPTION DATE</th>
                    <th>EXPIRY DATE</th>
                    <th>REPORT</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span className='bg-light-primary btn-icon rounded-circle' style={{ padding: 12 }}>
                            F
                        </span>
                        <small className='p-1'><u>Family Floater Plan</u></small>
                    </td>
                    <td><samp>112</samp></td>
                    <td>Health Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>
                <tr>
                    <td>
                        <span className='bg-light-warning btn-icon rounded-circle' style={{ padding: 12 }}>
                            A
                        </span>
                        <small className='p-1'><u>Add-On Health</u></small>
                    </td>
                    <td><samp>130</samp></td>
                    <td>Health Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>
                <tr>
                    <td>
                        <span className='bg-light-danger btn-icon rounded-circle' style={{ padding: 12 }}>
                            J
                        </span>
                        <small className='p-1'><u>Joint Health Insurance</u></small>
                    </td>
                    <td><samp>12</samp></td>
                    <td>Health Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>
                <tr>
                    <td>
                        <span className='bg-light-primary btn-icon rounded-circle' style={{ padding: 12 }}>
                            C
                        </span>
                        <small className='p-1'><u>Critical Illness Plan</u></small>
                    </td>
                    <td><samp>02</samp></td>
                    <td>Life Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>
                <tr>
                    <td>
                        <span className='bg-light-success btn-icon rounded-circle' style={{ padding: 12 }}>
                            I
                        </span>
                        <small className='p-1'><u>Group Health Insurance</u></small>
                    </td>
                    <td><samp>14</samp></td>
                    <td>Health Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>
                <tr>
                    <td>
                        <span className='bg-light-danger btn-icon rounded-circle' style={{ padding: 12 }}>
                            G
                        </span>
                        <small className='p-1'><u>Group Health Insurance</u></small>
                    </td>
                    <td><samp>112</samp></td>
                    <td>Health Cover</td>
                    <td>25 Jan 2021</td>
                    <td>27 Feb 2021</td>
                    <td><Download /></td>
                </tr>

            </tbody>
        </Table>
    )
}

export default PoliciesTableData