import React from 'react'
import { useGetCredential } from '@src/hooks/useGetCredential'
import { CredentialItem } from '../Credential/Credential'
import { CredentialOverview } from '../CredentialOverview/CredentialOverview'
import { CredentialDetailsTreeView } from '../CredentialDetailsTreeView/CredentialDetailsTreeView'
import { CredentialAdvancedMetadata } from '../AdvancedMetadata/AdvancedMetadata'
import './CredentialDetails.less'
import { Link } from 'react-router'

export const CredentialDetails: React.FC = () => {
    const { data, isPending, error } = useGetCredential()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="credential-details">
            <CredentialItem credential={data?.overview || {}} />
            <CredentialOverview credential={data?.overview || {}} />
            <CredentialDetailsTreeView details={data?.details || []} />
            <CredentialAdvancedMetadata
                metadata={data?.advancedMetadata || {}}
            />
            <Link to={'/credentials'} className="credential-details--link">
                ⬅️ Back
            </Link>
        </div>
    )
}
