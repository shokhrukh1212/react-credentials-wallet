import React, { useState } from 'react'
import { useAddCredential } from '@src/hooks/useAddCredential'
import { Link } from 'react-router'
import branding from '@src/branding'
import './Navbar.less'

export const Navbar: React.FC = () => {
    const [language, setLanguage] = useState<'EN' | 'FR'>('EN')
    const { mutate: addCredential, isLoading } = useAddCredential()

    const toggleLanguage = () => {
        setLanguage((prev: string) => (prev === 'EN' ? 'FR' : 'EN'))
    }

    return (
        <nav className="navbar">
            <Link to="/credentials" className={'navbar-logo-link'}>
                <div className="navbar-logo-link--content">
                    <img src={branding.logoPath} alt="Logo" />
                    <span>Logo</span>
                </div>
            </Link>

            <div className="navbar--buttons">
                <Link to="/present" className="navbar--buttons--present">
                    Present
                </Link>
                <button
                    className="navbar--buttons--add-credential"
                    onClick={addCredential}
                >
                    {isLoading ? 'Adding...' : 'Add credential'}
                </button>

                <button
                    className="navbar--buttons--language-switcher"
                    onClick={toggleLanguage}
                >
                    {language}
                </button>
            </div>
        </nav>
    )
}
