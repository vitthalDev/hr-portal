import { useRef, useState } from 'react'
import Wizard from '@components/wizard'
import { ArrowRight } from 'react-feather'
import Forms from './Forms'
import Documents from './Documents'

const UnpaidEndorsementDetail = () => {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'unpaid-form',
            title: 'Unpaid Endorsement Form',
            subtitle: '',
            content: <Forms stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'unpaid-documents',
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
