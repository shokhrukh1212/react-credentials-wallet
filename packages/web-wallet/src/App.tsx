import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { Navbar } from './components/index.ts'
import {
    CredentialsPage,
    CredentialDetailsPage,
    PresentationPage,
} from './pages'
import { useSetTitle } from './hooks/useSetTitle.ts'
import './style.less'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
})

function App() {
    useSetTitle()

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate
                    loading={<div>Loading...</div>}
                    persistor={persistor}
                >
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/credentials" />}
                            />
                            <Route
                                path="/credentials"
                                element={<CredentialsPage />}
                            />
                            <Route
                                path="/credential-details/:id"
                                element={<CredentialDetailsPage />}
                            />
                            <Route
                                path="/present"
                                element={<PresentationPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    )
}

export default App
