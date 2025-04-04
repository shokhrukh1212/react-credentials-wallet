import React from 'react'
import { Link, useParams } from 'react-router'
import { useGetCredential } from '@src/queries/useGetCredential'
import { useDeleteCredential } from '@src/queries/useDeleteCredential'
import { CredentialItem } from '@src/components/Credential/Credential'
import { CredentialOverview } from '@src/components/CredentialOverview/CredentialOverview'
import { CredentialDetailsTreeView } from '@src/components/CredentialDetailsTreeView/CredentialDetailsTreeView'
import { Credential } from '@src/types/common'
import './CredentialDetails.less'

export const CredentialDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isPending, error } = useGetCredential(id) as {
        data: Credential
        isPending: boolean
        error: any
    }
    const { mutate: deleteCredential } = useDeleteCredential()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="credential-details">
            <CredentialItem credential={data} />
            <CredentialOverview credential={data?.overview} />
            <CredentialDetailsTreeView details={data?.details} />
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
