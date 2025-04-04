import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/store'
import { CredentialsViewProps, Credential } from '@src/types/common'
import { CredentialsHeader } from '@src/components/CredentialsHeader/CredentialsHeader'
import { GridView } from './GridView'
import { TableView } from './TableView'
import { toggleView } from '@src/features/table-grid-view/tableGridViewSlice'
import './CredentialsView.less'

export const CredentialsView: React.FC<CredentialsViewProps> = ({
    credentials,
}) => {
    const [filteredCredentials, setFilteredCredentials] = useState(credentials)
    const [activeFilter, setActiveFilter] = useState({
        active: false,
        expired: false,
        revoked: false,
    })
    const tablegridview = useSelector(
        (state: RootState) => state.tablegridview.value
    )
    const dispatch = useDispatch()

    useEffect(() => {
        setFilteredCredentials(credentials)
    }, [credentials])

    type FilterKey = keyof typeof activeFilter

    const onFilterChange = (filter: FilterKey) => {
        const updatedFilter = {
            ...activeFilter,
            [filter]: !activeFilter[filter],
        }
        const isAnyFilterActive = Object.values(updatedFilter).some(Boolean)

        const filtered = credentials.filter((credential: Credential) => {
            if (!isAnyFilterActive) {
                return true
            }

            return updatedFilter[credential.overview.status as FilterKey]
        })

        setFilteredCredentials(filtered)
        setActiveFilter(updatedFilter)
    }

    const onToggleView = () => {
        dispatch(toggleView())
    }

    return (
        <div className="credentials">
            <CredentialsHeader
                activeFilter={activeFilter}
                onFilterChange={onFilterChange}
                onToggleView={onToggleView}
            />
            {tablegridview === 'grid' && (
                <GridView credentials={filteredCredentials} />
            )}
            {tablegridview === 'table' && (
                <TableView credentials={filteredCredentials} />
            )}
        </div>
    )
}
