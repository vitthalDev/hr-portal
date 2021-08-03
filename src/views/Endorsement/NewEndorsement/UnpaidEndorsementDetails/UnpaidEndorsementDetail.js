import { useRef, useState } from "react"
import Wizard from '@components/wizard'
import Forms from './Forms'
import Documents from "./Documents"

function UnpaidEndorsementDetail(props) {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'emergency-details',
            title: 'Unpaid Endorsement Form',
            subtitle: '',
            content: <Forms stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'emergency-details',
            title: 'Documents',
            subtitle: '',
            content: <Documents stepper={stepper} type='wizard-horizontal' />
        }

    ]

    return (
        <div className='horizontal-wizard'>
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
    )
}

export default UnpaidEndorsementDetail