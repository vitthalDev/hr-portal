import { useRef, useState } from "react"
import Wizard from '@components/wizard'
import ContactOne from "./ContactOne"

function EmergencyContact(props) {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'emergency-contact',
            title: 'Emergency - Contact',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />

        },
        {
            id: 'emergency-details',
            title: '',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'emergency-details',
            title: '',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'emergency-details',
            title: '',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'emergency-details',
            title: '',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'emergency-details',
            title: '',
            subtitle: '',
            content: <ContactOne stepper={stepper} type='wizard-horizontal' />
        }

    ]

    return (
        <div className='horizontal-wizard'>
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
    )
}

export default EmergencyContact