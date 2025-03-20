import { useState } from 'react'
import { AdvancedMetadata } from '../../types/common'

export const CredentialAdvancedMetadata: React.FC<{
    metadata: AdvancedMetadata
}> = ({ metadata }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer' }}
            >
                <h2>Advanced metadata {isOpen ? '🔽' : '▶️'}</h2>
                {isOpen && (
                    <div>
                        <p>Subject - {metadata.subject}</p>
                        <p>Issuer - {metadata.issuer}</p>
                        <p>Signing Algorithm - {metadata.signingAlgorithm}</p>
                        <p>Schema - {metadata.schema}</p>
                        <p>Format - {metadata.format}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
