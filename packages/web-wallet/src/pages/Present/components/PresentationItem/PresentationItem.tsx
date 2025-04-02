import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useInitializeNodes } from '@src/hooks/useInitializeNodes'
import { RootState } from '@src/store'
import { PresentationItemHeader } from './PresentationItemHeader'
import { PresentationItemViewButtonsProps } from '@src/types/common'
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
    const [viewType, setViewType] =
        useState<PresentationItemViewButtonsProps>('credentials')
    const [selectedCredentialIndex, setSelectedCredentialIndex] = useState<{
        [key: number]: number
    }>({})

    const dispatch = useDispatch()

    const selectedNodes = useSelector(
        (state: RootState) => state.presentStore.selectedNodes
    )

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

    // Initialize selectedNodes in Redux based on the details array
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
