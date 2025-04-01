import { useState } from 'react'
import { CredentialDetails } from '@src/types/common'
import { formatDate } from '@src/utils/format-date'
import { isDate } from '@src/utils/is-date'
import './CredentialDetailsTreeView.less'

const CredentialDetailsTreeNode: React.FC<{
    node: CredentialDetails
    depth?: number
}> = ({ node, depth = 0 }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={`tree-node`}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="tree-node--content"
            >
                <span>
                    {node.items?.length > 0 ? (isOpen ? '🔽' : '▶') : ''}{' '}
                    {node.name}:{' '}
                </span>
                {isDate(node.value)
                    ? formatDate(new Date(node.value))
                    : node.value || ''}
            </div>

            {isOpen &&
                node.items?.map((node: CredentialDetails, index: number) => (
                    <CredentialDetailsTreeNode
                        key={index}
                        node={node}
                        depth={depth + 1}
                    />
                ))}
        </div>
    )
}

export const CredentialDetailsTreeView: React.FC<{
    details: CredentialDetails[]
}> = ({ details }) => {
    return (
        <div className="credential-details-tree-view">
            <h2>Credential Details</h2>
            {details.map((item, index) => (
                <CredentialDetailsTreeNode key={index} node={item} />
            ))}
        </div>
    )
}
