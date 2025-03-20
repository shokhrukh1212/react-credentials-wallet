import { CredentialItemProps } from '../../types/common'
import formatDate from '../../utils/format-date'

export const CredentialOverview: React.FC<CredentialItemProps> = ({
    credential,
}) => {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>{credential.metadata.credDef.name}</td>
                    </tr>

                    <tr>
                        <td>Issuer</td>
                        <td>{credential.metadata.issuer.name}</td>
                    </tr>

                    <tr>
                        <td>Issued</td>
                        <td>{formatDate(new Date(credential.issued))}</td>
                    </tr>

                    <tr>
                        <td>Expires</td>
                        <td>{formatDate(new Date(credential.expires))}</td>
                    </tr>

                    <tr>
                        <td>Description</td>
                        <td>{credential.metadata.credDef.description}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
