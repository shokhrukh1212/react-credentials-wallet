import { Credential, CredentialsViewProps } from '../../types/common'
import { CredentialItem } from '../Credential/Credential'
import './GridView.less'

export const GridView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    return (
        <div className="credentials--list">
            {credentials?.map((credential: Credential) => (
                <CredentialItem
                    key={credential.id}
                    credential={credential}
                    isClickable={true}
                />
            ))}
        </div>
    )
}
