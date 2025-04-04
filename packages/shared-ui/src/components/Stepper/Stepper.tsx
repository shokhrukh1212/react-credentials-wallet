import { PresentationStepsProps } from '@src/types/common'
import './Stepper.less'

export const Stepper: React.FC<PresentationStepsProps> = ({
    steps,
    currentStep,
}) => {
    return (
        <div className="steps-header">
            {steps.map((step: string, index: number) => (
                <div
                    key={index}
                    className={`step ${index <= currentStep - 1 ? 'active' : ''}`}
                >
                    {index > 0 && index < steps.length && (
                        <div className="step-line"></div>
                    )}
                    <div className="step-number">{index + 1}</div>
                </div>
            ))}
        </div>
    )
}
