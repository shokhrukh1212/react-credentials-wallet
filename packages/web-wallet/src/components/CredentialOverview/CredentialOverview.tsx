import { Credential } from '@src/types/common'
import formatDate from '@src/utils/format-date'
import './CredentialOverview.less'

export const CredentialOverview: React.FC<{ credential: Credential }> = ({
    credential,
}) => {
    const { metadata, issued, expires } = credential

    return (
        <div className="credential-overview">
            <h2>Credential Overview</h2>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>Type</span>
                        </td>
                        <td>{metadata.credDef.name}</td>
                    </tr>

                    <tr>
                        <td>
                            <span>Issuer</span>
                        </td>
                        <td>{metadata.issuer.name}</td>
                    </tr>

                    <tr>
                        <td>
                            <span>Issued</span>
                        </td>
                        <td>{formatDate(new Date(issued))}</td>
                    </tr>

                    <tr>
                        <td>
                            <span>Expires</span>
                        </td>
                        <td>{formatDate(new Date(expires))}</td>
                    </tr>

                    <tr>
                        <td>
                            <span>Description</span>
                        </td>
                        <td>{metadata.credDef.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
