// Table.tsx
import { TableProps } from '@src/types/common'
import './Table.less'

export const Table = <T extends object>({
    data,
    columns,
    mode = 'list',
}: TableProps<T>) => {
    /* The mode prop determines whether the table is rendered in list mode (default) or keyValue mode. */
    const isKeyValue = mode === 'keyValue'
    const dataArray = Array.isArray(data) ? data : [data]

    return (
        <table className={`table ${mode}-table`}>
            {/* The <thead> is only rendered in list mode. */}
            {!isKeyValue && (
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key} className={column.className}>
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
            )}

            <tbody>
                {dataArray.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column) => (
                            <td key={column.key} className={column.className}>
                                {isKeyValue && (
                                    <span className="table-label">
                                        {column.label}
                                    </span>
                                )}
                                {column.render(item, index)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
