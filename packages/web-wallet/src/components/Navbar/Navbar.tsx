import React, { useState } from 'react'
import { Link } from 'react-router'
import branding from '@src/branding'
import './Navbar.less'

export const Navbar: React.FC = () => {
    const [language, setLanguage] = useState<'EN' | 'FR'>('EN')

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

            <button className="language-switcher" onClick={toggleLanguage}>
                {language}
            </button>
        </nav>
    )
}
