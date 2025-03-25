import { CredentialItemProps } from '@src/types/common'
import formatDate from '@src/utils/format-date'
import { Link } from 'react-router'
import './Credential.less'

export const CredentialItem: React.FC<CredentialItemProps> = ({
    credential,
    to,
}) => {
    return (
        <Link to={to} className="credential-item__link">
            <div className={'credential-item'}>
                <h2>{credential.metadata.issuer.name}</h2>
                <p
                    className={`credential-item--status credential-item--status__${credential.status.toLowerCase()}`}
                >
                    {credential.status}
                </p>
                <p>
                    <span>Expires</span> -{' '}
                    {formatDate(new Date(credential.expires))}
                </p>
                <p>
                    <span>Issued</span> -{' '}
                    {formatDate(new Date(credential.issued))}
                </p>
                <p>
                    <span>Metadata name</span> -{' '}
                    {credential.metadata.credDef.name}
                </p>
                <p>
                    <span>Metadata description</span> -
                    {credential.metadata.credDef.description || 'N/A'}
                </p>
                {credential.metadata.issuer.logo && (
                    <img
                        src={credential.metadata.issuer.logo.uri}
                        alt={credential.metadata.issuer.logo.altText}
                    />
                )}
            </div>
        </Link>
    )
}
