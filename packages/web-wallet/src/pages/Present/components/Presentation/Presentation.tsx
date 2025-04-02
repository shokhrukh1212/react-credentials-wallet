import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetPresent } from '@src/hooks/useGetPresent'
import { RootState } from '@src/store'
import { PresentationIntroPage } from '../PresentationIntro/PresentationIntro'
import { PresentationSteps } from '../PresentationSteps/PresentationSteps'
import { PresentationItem } from '../PresentationItem/PresentationItem'
import { PresentationFooterButtons } from '../PresentationFooterButtons/PresentationFooterButtons'
import './Presentation.less'

export const Presentation: React.FC = () => {
    const { data, isPending, error } = useGetPresent()
    const [currentStep, setCurrentStep] = useState(0)
    const collection = useSelector(
        (state: RootState) => state.presentStore.collection
    )

    const onGrantAccess = () => {
        console.log(collection, ' collection')
    }

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="presentation">
            <h1 className="presentation--title">Presentation request</h1>
            {currentStep === 0 ? (
                <>
                    <PresentationIntroPage
                        requestedFields={data?.allRequestedFields}
                        onProceed={() => setCurrentStep(1)}
                    />
                    <PresentationFooterButtons
                        currentStep={currentStep}
                        length={data?.inputs.length}
                    />
                </>
            ) : (
                <>
                    <PresentationSteps
                        steps={data?.allRequestedFields}
                        currentStep={currentStep}
                    />
                    <PresentationItem
                        data={data?.inputs[currentStep - 1]}
                        step={currentStep}
                    />
                    <PresentationFooterButtons
                        currentStep={currentStep}
                        length={data?.inputs.length}
                        onReject={() => setCurrentStep(0)}
                        onNext={() => setCurrentStep(currentStep + 1)}
                        onGrantAccess={onGrantAccess}
                        onBack={() => setCurrentStep(currentStep - 1)}
                    />
                </>
            )}
        </div>
    )
}
