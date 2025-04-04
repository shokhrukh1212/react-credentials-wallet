import { PresentationStepsProps } from '@shared-ui/types/common'
import { Stepper } from '@shared-ui/components'

export const PresentationSteps: React.FC<PresentationStepsProps> = ({
    steps,
    currentStep,
}) => {
    return <Stepper steps={steps} currentStep={currentStep} />
}
