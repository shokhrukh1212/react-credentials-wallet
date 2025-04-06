import { useDispatch, useSelector } from 'react-redux'
import { useGetPresent } from '@src/queries/useGetPresent'
import { RootState } from '@src/store'
import { PresentationIntroPage } from '../PresentationIntro/PresentationIntro'
import { PresentationSteps } from '../PresentationSteps/PresentationSteps'
import { PresentationItem } from '../PresentationItem/PresentationItem'
import { PresentationFooterButtons } from '../PresentationFooterButtons/PresentationFooterButtons'
import { back, next, reject } from '@src/features/present/PresentSlice'
import './Presentation.less'

export const Presentation: React.FC = () => {
    const { data, isPending, error } = useGetPresent()

    // TODO: put it in a hook called useCurrentStep()
    const currentStep = useSelector(
        (state: RootState) => state.presentStore.currentStep
    )
    const collection = useSelector(
        (state: RootState) => state.presentStore.collection
    )

    const dispatch = useDispatch()

    const onGrantAccess = () => {
        console.log(collection)
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
                        onProceed={() => dispatch(next())}
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
                        onReject={() => dispatch(reject())}
                        onNext={() => dispatch(next())}
                        onGrantAccess={onGrantAccess}
                        onBack={() => dispatch(back())}
                    />
                </>
            )}
        </div>
    )
}
