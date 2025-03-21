import { CredentialsViewProps } from '../../types/common'
import formatDate from '../../utils/format-date'
import './TableView.less'

export const TableView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    return (
        <div className="table-view">
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
                    {credentials.map((credential) => (
                        <tr key={credential.id}>
                            <td>{credential.metadata.credDef.name}</td>
                            <td>{'v14.1'}</td>
                            <td>{credential.metadata.credDef.description}</td>
                            <td>{credential.metadata.issuer.name}</td>
                            <td>{formatDate(new Date(credential.issued))}</td>
                            <td>{formatDate(new Date(credential.expires))}</td>
                            <td>
                                <span
                                    className={`table-view--status ${credential.status.toLowerCase()}`}
                                >
                                    {credential.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
