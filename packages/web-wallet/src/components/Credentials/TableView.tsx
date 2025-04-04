import { useMemo } from 'react'
import { useScrollPosition } from '@src/hooks/useScrollPosition'
import { CredentialsViewProps, Credential } from '@src/types/common'
import { formatDate } from '@src/utils/format-date'
import { TableColumn } from '@shared-ui/types/common'
import './TableView.less'
import { Table } from '@shared-ui/components'

export const TableView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    const containerRef = useScrollPosition('table-view-container')

    const columns: TableColumn<Credential>[] = useMemo(() => {
        return [
            {
                key: 'type',
                header: 'Type',
                render: (cred) => cred.overview.metadata.credDef.name,
            },
            {
                key: 'version',
                header: 'Version',
                render: () => 'v14.1',
            },
            {
                key: 'description',
                header: 'Description',
                render: (cred) => cred.overview.metadata.credDef.description,
            },
            {
                key: 'issuer',
                header: 'Issuer',
                render: (cred) => cred.overview.metadata.issuer.name,
            },
            {
                key: 'issued',
                header: 'Issuance date',
                render: (cred) => formatDate(new Date(cred.overview.issued)),
            },
            {
                key: 'expires',
                header: 'Expiration date',
                render: (cred) => formatDate(new Date(cred.overview.expires)),
            },
            {
                key: 'status',
                header: 'Status',
                render: (cred) => (
                    <span
                        className={`table-view--status ${cred.overview.status.toLowerCase()}`}
                    >
                        {cred.overview.status}
                    </span>
                ),
            },
        ]
    }, [])

    return (
        <div ref={containerRef} className="table-view">
            <Table data={credentials} columns={columns} />
        </div>
    )
}
