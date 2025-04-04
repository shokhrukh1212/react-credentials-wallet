import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectedNodes } from '@src/hooks/useSelectedNodes'
import { useInitializeNodes } from './hooks/useInitializeNodes'
import { PresentationItemHeader } from './PresentationItemHeader'
import {
    CredentialsView,
    RequestedDataView,
    PresentationItemViewButtons,
} from './views'
import { setCollectionData } from '@src/features/present/PresentSlice'
import { collectSelectedDetails } from '@src/utils/collect-details'
import './PresentationItem.less'

export const PresentationItem: React.FC<{ data: any; step: number }> = ({
    data,
    step,
}) => {
    const [viewType, setViewType] = useState<'credentials' | 'data'>(
        'credentials'
    )
    const [selectedCredentialIndex, setSelectedCredentialIndex] = useState<{
        [key: number]: number
    }>({})

    const dispatch = useDispatch()

    const selectedNodes = useSelectedNodes()

    const selectedCredential = useMemo(
        () => data?.credentials[selectedCredentialIndex[step]],
        [data, selectedCredentialIndex, step]
    )

    const details = useMemo(
        () => selectedCredential?.details || [],
        [selectedCredential]
    )

    const dataId = useMemo(
        () => selectedCredential?.overview?.id || '',
        [selectedCredential]
    )

    /*
     * Initializes selectedNodes in the Redux store based on the provided dataId and details.
     * Ensures that nodes are only initialized once for a given dataId.
     * */
    useInitializeNodes(dataId, details)

    // Initialize selectedCredentialIndex if undefined
    useEffect(() => {
        if (selectedCredentialIndex[step] === undefined) {
            setSelectedCredentialIndex((prev) => ({ ...prev, [step]: 0 }))
        }
    }, [step])

    // Update collection data when step, selectedCredential, or selectedNodes change
    useEffect(() => {
        const selectedDetails = collectSelectedDetails(
            selectedNodes,
            selectedCredential?.details || [],
            dataId || ''
        )

        dispatch(
            setCollectionData({
                inputId: step - 1,
                credential: {
                    id: dataId,
                    name: selectedCredential?.overview?.metadata?.credDef?.name,
                },
                details: selectedDetails || [],
            })
        )
    }, [step, selectedCredential, selectedNodes, dispatch])

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
                <RequestedDataView details={details} dataId={dataId} />
            )}
        </div>
    )
}
