import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userChoiceDataState {
    data: {
        inputId: string
        credential: string
        details: string[]
    }[]
}

const initialState: userChoiceDataState = {
    data: [],
}

export const userChoiceDataSlice = createSlice({
    name: 'userchoicedata',
    initialState,
    reducers: {
        setUserChoiceData: (
            state,
            action: PayloadAction<{
                inputId: string
                credential: string
                details: string[]
            }>
        ) => {
            const { inputId, credential, details } = action.payload

            const existingCredentialItemIndex = state.data.findIndex(
                (item) => item.inputId === inputId
            )

            if (existingCredentialItemIndex !== -1) {
                state.data[existingCredentialItemIndex].credential = credential
                state.data[existingCredentialItemIndex].details = details
            } else {
                state.data.push({ inputId, credential, details })
            }
        },
    },
})

export const { setUserChoiceData } = userChoiceDataSlice.actions

export default userChoiceDataSlice.reducer
