import { CredentialDetails } from '../types/common'

export const initializeNodes = (items: CredentialDetails[], path: string[]) => {
    const nodes: Record<string, boolean> = {}
    const traverse = (items: CredentialDetails[], currentPath: string[]) => {
        items.forEach((item) => {
            const nodePath = [
                ...currentPath,
                item.name.split(' ').join('_'),
            ].join('.')
            nodes[nodePath] = !!item.selected
            if (item.items) {
                traverse(item.items, [
                    ...currentPath,
                    item.name.split(' ').join('_'),
                ])
            }
        })
    }
    traverse(items, path)
    return nodes
}
