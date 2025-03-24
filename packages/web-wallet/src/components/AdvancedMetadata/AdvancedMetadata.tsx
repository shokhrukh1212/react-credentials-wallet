import { useState } from 'react'
import { AdvancedMetadata } from '@src/types/common'
import './AdvancedMetadata.less'

export const CredentialAdvancedMetadata: React.FC<{
    metadata: AdvancedMetadata
}> = ({ metadata }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <div className="advanced-metadata">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="advanced-metadata--content"
            >
                <h2>Advanced metadata {isOpen ? '🔽' : '▶️'}</h2>
                {isOpen && (
                    <div>
                        <p>
                            <span>Subject</span> - {metadata.subject}
                        </p>
                        <p>
                            <span>Issuer</span> - {metadata.issuer}
                        </p>
                        <p>
                            <span>Signing Algorithm</span> -{' '}
                            {metadata.signingAlgorithm}
                        </p>
                        <p>
                            <span>Schema</span> - {metadata.schema}
                        </p>
                        <p>
                            <span>Format</span> - {metadata.format}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
