import './style.less'
import { useSetTitle } from './hooks/useSetTitle.ts'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { Credentials } from './pages/Credentials.tsx'
import { CredentialDetails } from './pages/CredentialDetails.tsx'
import { Navbar } from './components/index.ts'

function App() {
    useSetTitle()

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/credentials" />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route
                    path="/credential-details"
                    element={<CredentialDetails />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
