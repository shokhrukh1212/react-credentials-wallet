import { useEffect, useState } from 'react'
import { PresentationItemHeader } from './PresentationItemHeader'
import { PresentationItemViewButtonsProps } from '@src/types/common'
import {
    CredentialsView,
    RequestedDataView,
    PresentationItemViewButtons,
} from './views'
import './PresentationItem.less'

export const PresentationItem: React.FC<{ data: any; step: number }> = ({
    data,
    step,
}) => {
    const [viewType, setViewType] =
        useState<PresentationItemViewButtonsProps>('credentials')
    const [selectedCredentialIndex, setSelectedCredentialIndex] = useState<{
        [key: number]: number
    }>({})

    useEffect(() => {
        if (selectedCredentialIndex[step] === undefined) {
            setSelectedCredentialIndex((prev) => ({ ...prev, [step]: 0 }))
        }
    }, [step])

    const onToggleView = () => {
        setViewType(viewType === 'credentials' ? 'data' : 'credentials')
    }
    return (
        <div className="presentation-item">
            <PresentationItemHeader
                credentialType={data?.requestedCredType || ''}
                requestedData={data?.requestedFields || []}
            />

            <PresentationItemViewButtons
                viewType={viewType}
                onToggleView={onToggleView}
            />

            {viewType === 'credentials' ? (
                <CredentialsView
                    data={data?.credentials}
                    selected={selectedCredentialIndex[step] ?? 0}
                    setSelected={(index: number) =>
                        setSelectedCredentialIndex((prev) => ({
                            ...prev,
                            [step]: index,
                        }))
                    }
                />
            ) : (
                <RequestedDataView
                    details={
                        data?.credentials[selectedCredentialIndex[step] ?? 0]
                            ?.details
                    }
                    dataId={
                        data?.credentials[selectedCredentialIndex[step] ?? 0]
                            ?.overview?.id
                    }
                />
            )}
        </div>
    )
}
