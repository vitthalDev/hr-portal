import { useRef, useState } from "react"
import Wizard from '@components/wizard'
import MemberOne from "./MemberOne"

function FamilyDetails(props) {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'family-details',
            title: 'Family - details',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />

        },
        {
            id: 'family-details',
            title: '',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'family-details',
            title: '',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'family-details',
            title: '',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'family-details',
            title: '',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'family-details',
            title: '',
            subtitle: '',
            content: <MemberOne stepper={stepper} type='wizard-horizontal' />
        }
    ]

    return (
        <div className='horizontal-wizard'>
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
    )
}

export default FamilyDetails