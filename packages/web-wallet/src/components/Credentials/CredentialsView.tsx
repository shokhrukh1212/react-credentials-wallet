import { useState } from 'react'
import { CredentialsViewProps } from '../../types/common'
import { CredentialsHeader } from '../CredentialsHeader/CredentialsHeader'
import './CredentialsView.less'
import { GridView } from './GridView'
import { TableView } from './TableView'

export const CredentialsView: React.FC<CredentialsViewProps> = ({
    credentials,
}) => {
    const [filteredCredentials, setFilteredCredentials] = useState(credentials)
    const [viewType, setViewType] = useState<'grid' | 'table'>('grid')
    const [activeFilter, setActiveFilter] = useState({
        active: false,
        expired: false,
        revoked: false,
    })

    type FilterKey = keyof typeof activeFilter

    const onFilterChange = (filter: FilterKey) => {
        const updatedFilter = {
            ...activeFilter,
            [filter]: !activeFilter[filter],
        }
        const isAnyFilterActive = Object.values(updatedFilter).some(Boolean)

        const filtered = credentials.filter((credential) => {
            if (!isAnyFilterActive) {
                return true
            }

            return updatedFilter[credential.status]
        })

        setFilteredCredentials(filtered)
        setActiveFilter(updatedFilter)
    }

    const onToggleView = () => {
        setViewType(viewType === 'grid' ? 'table' : 'grid')
    }

    return (
        <div className="credentials">
            <CredentialsHeader
                activeFilter={activeFilter}
                viewType={viewType}
                onFilterChange={onFilterChange}
                onToggleView={onToggleView}
            />
            {viewType === 'grid' && (
                <GridView credentials={filteredCredentials} />
            )}
            {viewType === 'table' && (
                <TableView credentials={filteredCredentials} />
            )}
        </div>
    )
}
