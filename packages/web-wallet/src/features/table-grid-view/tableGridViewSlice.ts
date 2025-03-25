import { createSlice } from '@reduxjs/toolkit'

export interface viewState {
    value: 'grid' | 'table'
}

const initialState: viewState = {
    value: 'grid',
}

export const tableGridViewSlice = createSlice({
    name: 'tablegridview',
    initialState,
    reducers: {
        toggleView: (state) => {
            state.value = state.value === 'grid' ? 'table' : 'grid'
        },
    },
})

export const { toggleView } = tableGridViewSlice.actions

export default tableGridViewSlice.reducer
