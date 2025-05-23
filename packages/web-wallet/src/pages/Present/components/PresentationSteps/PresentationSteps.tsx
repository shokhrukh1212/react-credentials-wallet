import { PresentationStepsProps } from '@src/types/common'
import './PresentationSteps.less'

export const PresentationSteps: React.FC<PresentationStepsProps> = ({
    steps,
    currentStep,
}) => {
    return (
        <div className="steps-header">
            {steps.map((step: string, index: number) => (
                <div
                    key={index}
                    className={`step ${index <= currentStep ? 'active' : ''}`}
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
