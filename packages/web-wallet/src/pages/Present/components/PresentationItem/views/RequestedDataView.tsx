import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectedNodes } from '@src/hooks/useSelectedNodes'
import { AppDispatch } from '@src/store'
import { CredentialDetails } from '@src/types/common'
import { isDate } from '@src/utils/is-date'
import { formatDate } from '@src/utils/format-date'
import { checkAllChildrenSelected } from '@src/utils/is-all-selected'
import {
    toggleNode,
    toggleParentNode,
} from '@src/features/present/PresentSlice'
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
    const selectedNodes = useSelectedNodes()

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
