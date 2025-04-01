export const isDate = (value: any): boolean => {
    if (value instanceof Date) return true
    if (typeof value === 'string') {
        // This regex matches ISO 8601 format, which is the default format for
        // JSON.stringify(new Date()) and Date.toISOString()
        //
        // The format is: YYYY-MM-DDTHH:mm:ss.sssZ
        const isISO8601 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(
            value
        )
        return isISO8601 && !isNaN(Date.parse(value))
    }
    return false
}
