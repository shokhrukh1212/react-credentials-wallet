import React from 'react'
import { useGetCredentials } from '../hooks/useGetCredentials'
import { CredentialsView } from '../components'

export const CredentialsPage: React.FC = () => {
    const { credentials, isPending, error } = useGetCredentials()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            {credentials?.length > 0 ? (
                <CredentialsView credentials={credentials} />
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
