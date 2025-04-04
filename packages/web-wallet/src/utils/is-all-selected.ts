export const checkAllChildrenSelected = (
    selectedNodes: Record<string, boolean>,
    path: string[]
) => {
    const currentPathPrefix = path.join('.')

    const childNodes = Object.keys(selectedNodes).filter((key) =>
        key.startsWith(currentPathPrefix + '.')
    )

    if (childNodes.length === 0) {
        return false
    }

    return childNodes.every((key) => selectedNodes[key] === true)
}
