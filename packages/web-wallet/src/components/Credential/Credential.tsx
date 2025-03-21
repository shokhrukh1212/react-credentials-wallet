import { useNavigate } from 'react-router'
import { CredentialItemProps } from '../../types/common'
import formatDate from '../../utils/format-date'
import './Credential.less'

export const CredentialItem: React.FC<CredentialItemProps> = ({
    credential,
    isClickable = false,
}) => {
    const navigate = useNavigate()

    return (
        <div
            className={`credential-item ${
                isClickable ? 'credential-item__clickable' : ''
            }`}
            onClick={() => {
                navigate(`/credential-details/${credential.id}`)
            }}
        >
            <h2>{credential.metadata.issuer.name}</h2>
            <p
                className={`credential-item--status credential-item--status__${credential.status.toLowerCase()}`}
            >
                Status - {credential.status}
            </p>
            <p>Expires - {formatDate(new Date(credential.expires))}</p>
            <p>Issued - {formatDate(new Date(credential.issued))}</p>
            <p>Metadata name - {credential.metadata.credDef.name}</p>
            <p>
                Metadata description -{' '}
                {credential.metadata.credDef.description || 'N/A'}
            </p>
            {credential.metadata.issuer.logo && (
                <img
                    src={credential.metadata.issuer.logo.uri}
                    alt={credential.metadata.issuer.logo.altText}
                />
            )}
        </div>
    )
}
