import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CredentialDetails } from '@src/types/common'

interface CollectionState {
    inputId: string
    credential: {
        id: string
        name: string
    }
    details: string[]
}

interface PresentProps {
    selectedNodes: Record<string, boolean>
    collection: CollectionState[]
}

const initialState: PresentProps = {
    selectedNodes: {},
    collection: [],
}

export const presentSlice = createSlice({
    name: 'present',
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
                    {
                        /* item.name.split(' ').join('_') - Replace all spaces in the item name (First name for example) with underscores, 
                        so that we can use it as a valid JavaScript property name. */
                    }
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
        // sets selected user credentials data
        setCollectionData: (
            state,
            action: PayloadAction<{
                inputId: string
                credential: {
                    id: string
                    name: string
                }
                details: string[]
            }>
        ) => {
            const { inputId, credential, details } = action.payload

            const existingCredentialItemIndex = state.collection.findIndex(
                (item) => item.inputId === inputId
            )

            if (existingCredentialItemIndex > -1) {
                state.collection[existingCredentialItemIndex] = {
                    inputId,
                    credential,
                    details,
                }
            } else {
                state.collection.push({ inputId, credential, details })
            }
        },
    },
})

export const {
    initializeSelectedNodes,
    toggleNode,
    toggleParentNode,
    setCollectionData,
} = presentSlice.actions
export default presentSlice.reducer
