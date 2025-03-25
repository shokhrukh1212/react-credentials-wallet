import { useState } from 'react'
import { TreeNodeProps } from '@src/types/common'
import './CredentialDetailsTreeView.less'

const CredentialDetailsTreeNode: React.FC<{
    node: TreeNodeProps
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
                    {node.items ? (isOpen ? '🔽' : '▶') : ''} {node.name}:{' '}
                </span>
                {node.value || ''}
            </div>

            {isOpen &&
                node.items?.map((node: TreeNodeProps, index: number) => (
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
    details: TreeNodeProps[]
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
