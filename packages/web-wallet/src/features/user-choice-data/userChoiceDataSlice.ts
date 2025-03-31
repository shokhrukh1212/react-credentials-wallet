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

            const existingIndex = state.data.findIndex(
                (item) => item.inputId === inputId
            )

            if (existingIndex !== -1) {
                state.data[existingIndex].credential = credential
                state.data[existingIndex].details = details
            } else {
                state.data.push({ inputId, credential, details })
            }
        },
    },
})

export const { setUserChoiceData } = userChoiceDataSlice.actions

export default userChoiceDataSlice.reducer
