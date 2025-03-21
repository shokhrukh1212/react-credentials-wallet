import { CredentialItemProps } from '@src/types/common'
import formatDate from '@src/utils/format-date'
import { Link } from 'react-router'

export const CredentialItem: React.FC<CredentialItemProps> = ({
    credential,
    isClickable = false,
    to,
}) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
        >
            <div
                style={{
                    cursor: 'pointer',
                    border: '1px solid black',
                    padding: '10px',
                    margin: '10px',
                    pointerEvents: isClickable ? 'auto' : 'none',
                }}
            >
                <h2>{credential.metadata.issuer.name}</h2>
                {credential.metadata.issuer.logo && (
                    <img
                        style={{ width: '100px' }}
                        src={credential.metadata.issuer.logo.uri}
                        alt={credential.metadata.issuer.logo.altText}
                    />
                )}
                <p>Expires - {formatDate(new Date(credential.expires))}</p>
                <p>Issued - {formatDate(new Date(credential.issued))}</p>
                <p>Status - {credential.status}</p>
                <p>Metadata name - {credential.metadata.credDef.name}</p>
                <p>
                    Metadata description -{' '}
                    {credential.metadata.credDef.description}
                </p>
            </div>
        </Link>
    )
}
