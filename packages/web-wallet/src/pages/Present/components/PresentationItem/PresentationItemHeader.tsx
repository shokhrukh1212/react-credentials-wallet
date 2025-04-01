import { PresentationItemHeaderProps } from '@src/types/common'
import './PresentationItemHeader.less'

export const PresentationItemHeader: React.FC<PresentationItemHeaderProps> = ({
    credentialType,
    requestedData,
}) => {
    return (
        <div
            className={`header ${credentialType.length === 0 ? 'header--single-item' : ''}`}
        >
            {credentialType.length > 0 && (
                <div className="header--credential-type">
                    <p>Credential Type</p>
                    <span>{credentialType}</span>
                </div>
            )}

            {requestedData.length > 0 && (
                <div className="header--requested-data">
                    <p>Requested data</p>
                    {requestedData.map((item: string, index: number) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            )}
        </div>
    )
}
