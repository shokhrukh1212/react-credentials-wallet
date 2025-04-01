import React from 'react'
import { PresentationItemViewButtonsProps } from '@src/types/common'
import './PresentationItemViewButtons.less'

export const PresentationItemViewButtons: React.FC<
    PresentationItemViewButtonsProps
> = ({ viewType, onToggleView }) => {
    return (
        <div className="presentation-item--view-buttons">
            <div
                onClick={onToggleView}
                className={
                    viewType === 'credentials'
                        ? 'presentation-item--view-buttons__active'
                        : ''
                }
            >
                Credentials
            </div>
            <div
                onClick={onToggleView}
                className={
                    viewType === 'data'
                        ? 'presentation-item--view-buttons__active'
                        : ''
                }
            >
                Data to share
            </div>
        </div>
    )
}
