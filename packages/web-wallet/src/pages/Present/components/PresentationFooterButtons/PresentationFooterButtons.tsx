import { PresentationFooterButtonsProps } from '@src/types/common'
import './PresentationFooterButtons.less'

export const PresentationFooterButtons: React.FC<
    PresentationFooterButtonsProps
> = ({ currentStep, length, onBack, onNext, onGrantAccess, onReject }) => {
    return (
        <div className="presentation-footer-buttons">
            <div>
                {currentStep > 1 && (
                    <button onClick={onBack} className="back">
                        Back
                    </button>
                )}
                {currentStep > 0 && (
                    <button onClick={onReject} className="reject">
                        Reject
                    </button>
                )}
            </div>
            <div>
                {currentStep > 0 && currentStep < length && (
                    <button onClick={onNext} className="next">
                        Next
                    </button>
                )}
                {currentStep === length && (
                    <button onClick={onGrantAccess} className="grant">
                        Grant Access
                    </button>
                )}
            </div>
        </div>
    )
}
