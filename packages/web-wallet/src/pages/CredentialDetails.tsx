import React from 'react'
import { useGetCredential } from '../hooks/useGetCredential'
import {
    CredentialItem,
    CredentialOverview,
    CredentialDetailsTreeView,
} from '../components'
import { CredentialAdvancedMetadata } from '../components'

export const CredentialDetails: React.FC = () => {
    const { data, isPending, error } = useGetCredential()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <CredentialItem credential={data?.overview || {}} />
            <h2>Credential Overview</h2>
            <CredentialOverview credential={data?.overview || {}} />
            <h2>Credential Details</h2>
            <CredentialDetailsTreeView details={data?.details || []} />
            <CredentialAdvancedMetadata
                metadata={data?.advancedMetadata || {}}
            />
        </>
    )
}
