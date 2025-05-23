import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tableGridViewReducer from './features/table-grid-view/tableGridViewSlice.ts'
import credentialDetailsReducer from './features/credential-details/credentialDetailsSlice.ts'
import userChoiceDataReducer from './features/user-choice-data/userChoiceDataSlice.ts'

const persistConfig = {
    key: 'tablegridview',
    storage,
}

const persistedReducer = persistReducer(persistConfig, tableGridViewReducer)

export const store = configureStore({
    reducer: {
        tablegridview: persistedReducer,
        credentialDetails: credentialDetailsReducer,
        userChoiceData: userChoiceDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
