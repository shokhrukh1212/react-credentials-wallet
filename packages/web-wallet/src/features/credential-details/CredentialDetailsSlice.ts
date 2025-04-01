import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CredentialDetails } from '@src/types/common'

interface CredentialDetailsState {
    selectedNodes: Record<string, boolean>
}

const initialState: CredentialDetailsState = {
    selectedNodes: {},
}

export const credentialDetailsSlice = createSlice({
    name: 'credentialDetails',
    initialState,
    reducers: {
        initializeSelectedNodes: (
            state,
            action: PayloadAction<Record<string, boolean>>
        ) => {
            state.selectedNodes = {
                ...state.selectedNodes,
                ...action.payload,
            }
        },
        toggleNode: (
            state,
            action: PayloadAction<{ nodeId: string; checked: boolean }>
        ) => {
            const { nodeId, checked } = action.payload
            state.selectedNodes[nodeId] = checked
        },
        toggleParentNode: (
            state,
            action: PayloadAction<{
                path: string[]
                checked: boolean
                items: CredentialDetails[]
            }>
        ) => {
            const { path, checked, items } = action.payload

            const setChildren = (
                items: CredentialDetails[],
                currentPath: string[]
            ) => {
                items.forEach((item) => {
                    const itemPath = [
                        ...currentPath,
                        item.name.split(' ').join('_'),
                    ]
                    state.selectedNodes[itemPath.join('.')] = checked
                    if (item.items) {
                        setChildren(item.items, itemPath)
                    }
                })
            }

            setChildren(items, path)
        },
    },
})

export const { initializeSelectedNodes, toggleNode, toggleParentNode } =
    credentialDetailsSlice.actions
export default credentialDetailsSlice.reducer
