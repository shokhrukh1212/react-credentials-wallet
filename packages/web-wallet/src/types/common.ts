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

export interface CredentialDetails {
    name: string
    value?: string | null
    items?: CredentialDetails[]
    selected?: boolean
}

export interface CredentialOverviewState {
    metadata: CredentialMetadata
    issued: Date
    expires: Date
    status: 'active' | 'expired' | 'revoked'
}

export interface Credential {
    id: string
    overview: CredentialOverviewState
    details: CredentialDetails[]
}

export interface CredentialItemProps {
    credential: Credential
    to?: string
}

export interface CredentialsViewProps {
    credentials: Credential[]
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
    onFilterChange: (filter: 'active' | 'expired' | 'revoked') => void
    onToggleView: () => void
}

export interface PresentationItemHeaderProps {
    credentialType: string
    requestedData: string[]
}

export interface PresentationCredentialsViewProps {
    data: {
        overview: CredentialOverviewState
        details: CredentialDetails[]
    }[]
    selected: number
    setSelected: (selected: number) => void
}

export interface PresentationFooterButtonsProps {
    currentStep: number
    length: number
    onReject?: () => void
    onNext?: () => void
    onGrantAccess?: () => void
    onBack?: () => void
}

export interface PresentationItemViewButtonsProps {
    viewType: 'credentials' | 'data'
    onToggleView?: () => void
}
