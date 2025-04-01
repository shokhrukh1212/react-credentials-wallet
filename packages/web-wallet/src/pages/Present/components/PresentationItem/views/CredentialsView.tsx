import { PresentationCredentialsViewProps } from '@src/types/common'
import './CredentialsView.less'

export const CredentialsView: React.FC<PresentationCredentialsViewProps> = ({
    data,
    selected,
    setSelected,
}) => {
    return (
        <div className="credentials-view">
            {data?.map((item, index: number) => (
                <CredentialsViewItem
                    key={index}
                    selected={selected === index}
                    setSelected={() => setSelected(index)}
                    title={item?.overview?.metadata?.credDef?.name}
                />
            ))}
        </div>
    )
}

export const CredentialsViewItem: React.FC<{
    selected: boolean
    setSelected: (selected: boolean) => void
    title: string
}> = ({ selected, title, setSelected }) => {
    return (
        <div
            className={`credentials-view--item ${selected ? 'active' : ''}`}
            onClick={() => setSelected(!selected)}
        >
            <input type="radio" checked={selected} />
            <span className="label">{title}</span>
        </div>
    )
}
