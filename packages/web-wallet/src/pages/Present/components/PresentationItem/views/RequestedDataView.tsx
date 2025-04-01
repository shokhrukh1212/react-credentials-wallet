import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@src/store'
import { CredentialDetails } from '@src/types/common'
import { isDate } from '@src/utils/is-date'
import { formatDate } from '@src/utils/format-date'
import {
    toggleNode,
    toggleParentNode,
} from '@src/features/credential-details/credentialDetailsSlice'
import { checkAllChildrenSelected } from '@src/utils/is-all-selected'
import { initializeSelectedNodes } from '@src/features/credential-details/credentialDetailsSlice'
import { initializeNodes } from '@src/utils/initialize-nodes'
import './RequestedDataView.less'

interface CredentialListProps {
    details: CredentialDetails[]
    dataId: string
}

const RequestedDataViewNode: React.FC<{
    node: CredentialDetails
    path: string[]
}> = ({ node, path = [] }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    const dispatch: AppDispatch = useDispatch()
    const currentPath = [...path, node.name.split(' ').join('_')]
    const nodeId = currentPath.join('.')
    const selectedNodes = useSelector(
        (state: RootState) => state.credentialDetails.selectedNodes
    )

    const isParent = node.items && node.items.length > 0

    const isChecked = isParent
        ? checkAllChildrenSelected(selectedNodes, currentPath)
        : !!selectedNodes[nodeId]

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked

        if (isParent) {
            dispatch(
                toggleParentNode({
                    path: currentPath,
                    checked: isChecked,
                    items: node.items,
                })
            )
        } else {
            dispatch(toggleNode({ nodeId, checked: isChecked }))
        }
    }

    return (
        <div className={`detail-item ${node.selected ? 'selected' : ''}`}>
            <div className="detail-header">
                <div className="detail-header--checkbox">
                    <input
                        type="checkbox"
                        name={node.name}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="detail-name">{node.name}</span>
                </div>
                {node.value && !node.items && (
                    <span className="detail-value">
                        {isDate(node.value)
                            ? formatDate(new Date(node.value))
                            : node.value || ''}
                    </span>
                )}
                {!node.value && node.items && (
                    <p
                        className="detail-header--arrow"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>{isOpen ? 'collapse' : 'expand'}</span>
                    </p>
                )}
            </div>

            {isOpen &&
                node.items?.map((node: CredentialDetails, index: number) => (
                    <div key={index} className="nested-items">
                        <RequestedDataViewNode node={node} path={currentPath} />
                    </div>
                ))}
        </div>
    )
}

export const RequestedDataView: React.FC<CredentialListProps> = ({
    details,
    dataId,
}) => {
    const dispatch: AppDispatch = useDispatch()
    const selectedNodes = useSelector(
        (state: RootState) => state.credentialDetails.selectedNodes
    )

    // Initialize selectedNodes in Redux based on the details array
    useEffect(() => {
        const hasInitializedNodes = Object.keys(selectedNodes).some((key) =>
            key.startsWith(`${dataId}.`)
        )
        if (!hasInitializedNodes) {
            const nodes = initializeNodes(details, [dataId])
            dispatch(initializeSelectedNodes(nodes))
        }
    }, [details, dataId, dispatch, selectedNodes])

    return (
        <div className="details-list">
            {details.map((detail, index) => (
                <RequestedDataViewNode
                    node={detail}
                    key={index}
                    path={[dataId]}
                />
            ))}
        </div>
    )
}
