import './style.less'
import { useSetTitle } from './hooks/useSetTitle.ts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Navbar } from './components/index.ts'
import { CredentialsPage } from './pages'
import { CredentialDetailsPage } from './pages'

function App() {
    useSetTitle()

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/credentials" />} />
                    <Route path="/credentials" element={<CredentialsPage />} />
                    <Route
                        path="/credential-details/:id"
                        element={<CredentialDetailsPage />}
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
