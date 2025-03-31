import { useState } from 'react'
import { PresentationItemHeader } from './PresentationItemHeader'
import { CredentialsView } from './CredentialsView'
import { RequestedDataView } from './RequestedDataView'
import { PresentationItemViewButtonsProps } from '@src/types/common'
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

const PresentationItemViewButtons: React.FC<
    PresentationItemViewButtonsProps
> = ({ viewType, onToggleView }) => {
    return (
        <div className="presentation-item--view-buttons">
            <div
                onClick={onToggleView}
                className={
                    viewType === 'credentials'
                        ? 'presentation-item--view-buttons__active'
                        : ''
                }
            >
                Credentials
            </div>
            <div
                onClick={onToggleView}
                className={
                    viewType === 'data'
                        ? 'presentation-item--view-buttons__active'
                        : ''
                }
            >
                Data to share
            </div>
        </div>
    )
}
