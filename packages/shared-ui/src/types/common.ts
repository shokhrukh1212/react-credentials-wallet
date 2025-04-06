import { ReactNode } from 'react'

export interface PresentationStepsProps {
    steps: string[]
    currentStep: number
}

export type TableColumn<T> = {
    key: string
    header?: string
    label?: string
    render: (data: T, index?: number) => ReactNode
    className?: string
}

export interface TableProps<T> {
    data: T | T[]
    columns: TableColumn<T>[]
    mode?: 'keyValue' | 'list'
}
