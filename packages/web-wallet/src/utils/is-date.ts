export const isDate = (value: any): boolean => {
    return !isNaN(Date.parse(value))
}
