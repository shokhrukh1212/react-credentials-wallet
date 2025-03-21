import { useState } from 'react'
import { TreeNodeProps } from '@src/types/common'

const CredentialDetailsTreeNode: React.FC<{
    node: TreeNodeProps
    depth?: number
}> = ({ node, depth = 0 }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div style={{ paddingLeft: `${depth * 20}px` }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer' }}
            >
                {node.items ? (isOpen ? '🔽' : '▶') : ''} {node.name}:{' '}
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
        <div>
            {details.map((item, index) => (
                <CredentialDetailsTreeNode key={index} node={item} />
            ))}
        </div>
    )
}
