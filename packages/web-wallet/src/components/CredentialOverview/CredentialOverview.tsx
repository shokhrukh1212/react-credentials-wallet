import { useMemo } from 'react'
import { CredentialOverviewState } from '@src/types/common'
import { formatDate } from '@src/utils/format-date'
import { Table } from '@shared-ui/components'
import { TableColumn } from '@shared-ui/types/common'
import './CredentialOverview.less'

export const CredentialOverview: React.FC<{
    credential: CredentialOverviewState
}> = ({ credential }) => {
    const columns: TableColumn<CredentialOverviewState>[] = useMemo(() => {
        return [
            {
                key: 'type',
                label: 'Type',
                render: (cred) => cred.metadata.credDef.name,
            },
            {
                key: 'issuer',
                label: 'Issuer',
                render: (cred) => cred.metadata.issuer.name,
            },
            {
                key: 'issued',
                label: 'Issued',
                render: (cred) => formatDate(new Date(cred.issued)),
            },
            {
                key: 'expires',
                label: 'Expires',
                render: (cred) => formatDate(new Date(cred.expires)),
            },
            {
                key: 'description',
                label: 'Description',
                render: (cred) => cred.metadata.credDef.description,
            },
        ]
    }, [])

    return (
        <div className="credential-overview">
            <h2>Credential Overview</h2>
            <Table data={credential} columns={columns} mode="keyValue" />
        </div>
    )
}
