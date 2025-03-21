import React from 'react'
import { useGetCredentials } from '../hooks/useGetCredentials'
import { CredentialItem } from '../components'
import { Credential } from '../types/common'

export const Credentials: React.FC = () => {
    const { credentials, isPending, error } = useGetCredentials()

    if (isPending) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            {credentials?.length > 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {credentials?.map((credential: Credential) => (
                        <CredentialItem
                            key={credential.id}
                            credential={credential}
                            isClickable={true}
                            to={`/credential-details/${credential.id}`}
                        />
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}
