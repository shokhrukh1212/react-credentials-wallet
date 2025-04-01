import { useState } from 'react'
import { PresentationItemHeader } from './PresentationItemHeader'
import { PresentationItemViewButtonsProps } from '@src/types/common'
import {
    CredentialsView,
    RequestedDataView,
    PresentationItemViewButtons,
} from './views'
import './PresentationItem.less'

export const PresentationItem: React.FC<{ data: any }> = ({ data }) => {
    const [viewType, setViewType] =
        useState<PresentationItemViewButtonsProps>('data')
    const [selectedCredentialIndex, setSelectedCredentialIndex] =
        useState<number>(0)

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
                    selected={selectedCredentialIndex}
                    setSelected={setSelectedCredentialIndex}
                />
            ) : (
                <RequestedDataView
                    details={
                        data?.credentials[selectedCredentialIndex]?.details
                    }
                />
            )}
        </div>
    )
}
