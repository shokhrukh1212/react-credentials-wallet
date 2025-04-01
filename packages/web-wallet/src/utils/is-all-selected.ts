export const checkAllChildrenSelected = (
    selectedNodes: Record<string, boolean>,
    path: string[]
) => {
    const currentPathPrefix = path.join('.')

    return Object.keys(selectedNodes).every((key) => {
        if (key.startsWith(currentPathPrefix)) {
            return selectedNodes[key] === true
        }
        return true
    })
}
