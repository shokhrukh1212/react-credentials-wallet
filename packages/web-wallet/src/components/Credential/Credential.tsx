import { useScrollPosition } from '@src/hooks/useScrollPosition'
import { CredentialItemProps } from '@src/types/common'
import formatDate from '@src/utils/format-date'
import { Link } from 'react-router'
import './Credential.less'

export const CredentialItem: React.FC<CredentialItemProps> = ({
    credential,
    to,
}) => {
    const { scrollRef, handleScroll, scrollPosition } = useScrollPosition()
    const { metadata, issued, expires, status } = credential.overview

    return (
        <Link
            to={to}
            className="credential-item__link"
            state={{ scrollPosition }}
        >
            <div
                className={'credential-item'}
                ref={scrollRef}
                onScroll={handleScroll}
            >
                <h2>{metadata.issuer.name}</h2>
                <p
                    className={`credential-item--status credential-item--status__${status.toLowerCase()}`}
                >
                    {status}
                </p>
                <p>
                    <span>Expires</span> - {formatDate(new Date(expires))}
                </p>
                <p>
                    <span>Issued</span> - {formatDate(new Date(issued))}
                </p>
                <p>
                    <span>Metadata name</span> - {metadata.credDef.name}
                </p>
                <p>
                    <span>Metadata description</span> -
                    {metadata.credDef.description || 'N/A'}
                </p>
                {metadata.issuer.logo && (
                    <img
                        src={metadata.issuer.logo.uri}
                        alt={metadata.issuer.logo.altText}
                    />
                )}
            </div>
        </Link>
    )
}
