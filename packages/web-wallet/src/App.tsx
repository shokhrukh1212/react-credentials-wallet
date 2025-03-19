import './style.less'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Credentials } from './pages/Credentials.tsx'
import { CredentialDetails } from './pages/CredentialDetails.tsx'
import { Home } from './pages/Home.tsx'
import { Navbar } from './components/index.ts'
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
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
