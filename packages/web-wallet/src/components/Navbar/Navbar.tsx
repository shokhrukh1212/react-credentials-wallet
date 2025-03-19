import React, { useState } from 'react'
import branding from '../../branding'
import './Navbar.less'

export const Navbar: React.FC = () => {
    const [language, setLanguage] = useState<'EN' | 'FR'>('EN')

    const toggleLanguage = () => {
        setLanguage((prev: string) => (prev === 'EN' ? 'FR' : 'EN'))
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={branding.logoPath} alt="Logo" />
                <span>Logo</span>
            </div>

            <button className="language-switcher" onClick={toggleLanguage}>
                {language}
            </button>
        </nav>
    )
}
