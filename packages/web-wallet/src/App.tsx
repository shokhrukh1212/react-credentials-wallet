import './style.less'
import { useSetTitle } from './hooks/useSetTitle.ts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Credentials } from './pages/Credentials.tsx'
import { CredentialDetails } from './pages/CredentialDetails.tsx'
import { Navbar } from './components/index.ts'

function App() {
    useSetTitle()

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/credentials" />} />
                    <Route path="/credentials" element={<Credentials />} />
                    <Route
                        path="/credential-details/:id"
                        element={<CredentialDetails />}
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
