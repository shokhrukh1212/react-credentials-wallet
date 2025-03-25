import React from 'react'
import { useGetCredential } from '@src/hooks/useGetCredential'
import { useScrollPosition } from '@src/hooks/useScrollPosition'
import { useDeleteCredential } from '@src/hooks/useDeleteCredential'
import { CredentialItem } from '../Credential/Credential'
import { CredentialOverview } from '../CredentialOverview/CredentialOverview'
import { CredentialDetailsTreeView } from '../CredentialDetailsTreeView/CredentialDetailsTreeView'
import { CredentialAdvancedMetadata } from '../AdvancedMetadata/AdvancedMetadata'
import './CredentialDetails.less'
import { Link, useParams } from 'react-router'

export const CredentialDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isPending, error } = useGetCredential(id)
    const { scrollRef, handleScroll, scrollPosition } = useScrollPosition()
    const { mutate: deleteCredential } = useDeleteCredential()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div
            className="credential-details"
            onScroll={handleScroll}
            ref={scrollRef}
        >
            <CredentialItem credential={data || {}} />
            <CredentialOverview credential={data?.overview || {}} />
            <CredentialDetailsTreeView details={data?.details || []} />
            <CredentialAdvancedMetadata
                metadata={data?.advancedMetadata || {}}
            />
            <Link
                to={'/credentials'}
                className="credential-details--link"
                state={{ scrollPosition }}
            >
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
