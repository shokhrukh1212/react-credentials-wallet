import './CredentialsHeader.less'
import { CredentialsHeaderProps } from '../../types/common'

export const CredentialsHeader: React.FC<CredentialsHeaderProps> = ({
    activeFilter,
    viewType,
    onFilterChange,
    onToggleView,
}) => {
    return (
        <header>
            <div className="header--filter-buttons">
                <button
                    onClick={() => onFilterChange('active')}
                    className={
                        activeFilter.active
                            ? 'header--filter-buttons__active'
                            : ''
                    }
                >
                    ✅ Active
                </button>
                <button
                    onClick={() => onFilterChange('expired')}
                    className={
                        activeFilter.expired
                            ? 'header--filter-buttons__active'
                            : ''
                    }
                >
                    ⚠️ Expired
                </button>
                <button
                    onClick={() => onFilterChange('revoked')}
                    className={
                        activeFilter.revoked
                            ? 'header--filter-buttons__active'
                            : ''
                    }
                >
                    🚫 Revoked
                </button>
            </div>

            <div className="header--view-toggle">
                <button
                    onClick={onToggleView}
                    className={
                        viewType === 'grid' ? 'header--view-toggle__active' : ''
                    }
                >
                    <img src="/icons/grid-view.svg" alt="Grid View" />
                </button>
                <button
                    onClick={onToggleView}
                    className={
                        viewType === 'table'
                            ? 'header--view-toggle__active'
                            : ''
                    }
                >
                    <img src="/icons/list-view.svg" alt="Grid View" />
                </button>
            </div>
        </header>
    )
}
