import { useRef, useState } from "react"
import Wizard from '@components/wizard'
import PersonalDetails from "./PersonalDetails"
import ProfileDetails from "./ProfileDetails"
import PolicyDetails from "./PolicyDetails"

function EmployeeInformation(props) {
    const [stepper, setStepper] = useState(null)
    const ref = useRef(null)

    const steps = [
        {
            id: 'profile-details',
            title: 'Profile Details',
            subtitle: 'Enter Your Profile Details.',
            content: <ProfileDetails stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'personal-details',
            title: 'Personal Details',
            subtitle: 'Enter Your Personal Details',
            content: <PersonalDetails stepper={stepper} type='wizard-horizontal' />
        },
        {
            id: 'policy-details',
            title: 'Policy details',
            subtitle: 'Enter Your Policy Details',
            content: <PolicyDetails stepper={stepper} type='wizard-horizontal' />
        }
    ]

    return (
        <div className='horizontal-wizard'>
            <Wizard instance={el => setStepper(el)} ref={ref} steps={steps} />
        </div>
    )
}

export default EmployeeInformation