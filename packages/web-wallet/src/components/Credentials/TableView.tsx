import { useScrollPosition } from '@src/hooks/useScrollPosition'
import { CredentialsViewProps, Credential } from '@src/types/common'
import formatDate from '@src/utils/format-date'
import './TableView.less'

export const TableView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    const containerRef = useScrollPosition('table-view-container')

    return (
        <div
            ref={containerRef}
            className="table-view"
            id="table-view-container"
        >
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Version</th>
                        <th>Description</th>
                        <th>Issuer</th>
                        <th>Issuance data</th>
                        <th>Expiration date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {credentials.map((credential: Credential) => {
                        const {
                            id,
                            overview: { metadata, issued, expires, status },
                        } = credential

                        return (
                            <tr key={id}>
                                <td>{metadata.credDef.name}</td>
                                <td>{'v14.1'}</td>
                                <td>{metadata.credDef.description}</td>
                                <td>{metadata.issuer.name}</td>
                                <td>{formatDate(new Date(issued))}</td>
                                <td>{formatDate(new Date(expires))}</td>
                                <td>
                                    <span
                                        className={`table-view--status ${status.toLowerCase()}`}
                                    >
                                        {status}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
