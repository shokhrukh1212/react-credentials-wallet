export interface CredentialMetadata {
    issuer: {
        name: string
        logo?: {
            uri: string
            altText: string
        }
    }
    credDef: {
        name: string
        description?: string
    }
}

export interface Credential {
    id: string
    issued: Date
    expires: Date
    status: 'active' | 'expired' | 'revoked'
    metadata: CredentialMetadata
}

export interface CredentialItemProps {
    credential: Credential
    isClickable?: boolean
    to?: string
}

export interface CredentialsViewProps {
    credentials: Credential[]
}

export interface TreeNodeProps {
    name: string
    value?: string | null
    items?: TreeNodeProps[]
}

export interface AdvancedMetadata {
    subject: string
    issuer: string
    signingAlgorithm: string
    schema: string
    format: string
}

export interface CredentialsHeaderProps {
    activeFilter: {
        active: boolean
        expired: boolean
        revoked: boolean
    }
    viewType: 'grid' | 'table'
    onFilterChange: (filter: 'active' | 'expired' | 'revoked') => void
    onToggleView: () => void
}
