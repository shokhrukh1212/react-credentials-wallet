export const isDate = (value: any): boolean => {
    if (value instanceof Date) return true
    if (typeof value === 'string') {
        return (
            /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value) &&
            !isNaN(Date.parse(value))
        )
    }
    return false
}
