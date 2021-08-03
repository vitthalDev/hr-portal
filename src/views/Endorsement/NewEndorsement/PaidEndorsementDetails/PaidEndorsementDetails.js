import { React, useRef, useState } from 'react'
import Wizard from '@components/wizard'
import Forms from './Forms'
import Members from './Members'
import Documents from './Documents'
import ContactOne from '../UnpaidEndorsementDetails/ContactOne'

function PaidEndorsementDetails(props) {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'forms',
            title: 'Paid Endorsement Form',
            subtitle: '',
            content: <Forms stepper={stepper} type='wizard-horizontal' />

        },
        {
            id: 'members',
            title: 'Members',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'documments',
            title: 'Documents',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        }

    ]
    return (
        <>
            <div className='horizontal-wizard'>
                <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
            </div>
        </>
    )
}

export default PaidEndorsementDetails
