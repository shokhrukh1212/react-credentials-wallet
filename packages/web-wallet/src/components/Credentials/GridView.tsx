import { useScrollPosition } from '@src/hooks/useScrollPosition'
import { Credential, CredentialsViewProps } from '@src/types/common'
import { CredentialItem } from '@src/components/Credential/Credential'
import './GridView.less'

export const GridView: React.FC<CredentialsViewProps> = ({ credentials }) => {
    const containerRef = useScrollPosition('grid-view-container')

    return (
        <div ref={containerRef} className="grid-view">
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
