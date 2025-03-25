import React from 'react'
import { Link, useParams } from 'react-router'
import { useGetCredential } from '@src/hooks/useGetCredential'
import { useDeleteCredential } from '@src/hooks/useDeleteCredential'
import { CredentialItem } from '../Credential/Credential'
import { CredentialOverview } from '../CredentialOverview/CredentialOverview'
import { CredentialDetailsTreeView } from '../CredentialDetailsTreeView/CredentialDetailsTreeView'
import { CredentialAdvancedMetadata } from '../AdvancedMetadata/AdvancedMetadata'
import './CredentialDetails.less'

export const CredentialDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isPending, error } = useGetCredential(id)
    const { mutate: deleteCredential } = useDeleteCredential()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="credential-details">
            <CredentialItem credential={data || {}} />
            <CredentialOverview credential={data?.overview || {}} />
            <CredentialDetailsTreeView details={data?.details || []} />
            <CredentialAdvancedMetadata
                metadata={data?.advancedMetadata || {}}
            />
            <Link to={'/credentials'} className="credential-details--link">
                ⬅️ Back
            </Link>

            <button
                className="credential-details--delete"
                title="Delete"
                onClick={() => deleteCredential(id)}
            >
                ❌
            </button>
        </div>
    )
}
