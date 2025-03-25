import { Credential, CredentialsViewProps } from '@src/types/common'
import { CredentialItem } from '../Credential/Credential'
import './GridView.less'

export const GridView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    return (
        <div className="grid-view">
            {credentials?.map((credential: Credential) => (
                <CredentialItem
                    key={credential.id}
                    credential={credential}
                    to={`/credential-details/${credential.id}`}
                />
            ))}
        </div>
    )
}
