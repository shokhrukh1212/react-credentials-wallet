import { PresentationStepsProps } from '@shared-ui/types/common'
import { Stepper } from '@shared-ui/components'

// TODO: remove this component, looks unnecessary
export const PresentationSteps: React.FC<PresentationStepsProps> = ({
    steps,
    currentStep,
}) => {
    return <Stepper steps={steps} currentStep={currentStep} />
}
