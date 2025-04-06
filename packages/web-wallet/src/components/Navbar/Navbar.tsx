import { useState } from 'react'
import { useAddCredential } from '@src/queries/useAddCredential'
import { Link } from 'react-router'
import branding from '@src/branding'
import './Navbar.less'

export const Navbar: React.FC = () => {
    const [language, setLanguage] = useState<'EN' | 'FR'>('EN')
    const { mutate: addCredential, isPending } = useAddCredential()

    const toggleLanguage = () => {
        setLanguage((prev: string) => (prev === 'EN' ? 'FR' : 'EN'))
    }

    return (
        <nav className="navbar">
            <Link to="/credentials" className={'navbar__logo-link'}>
                <div className="navbar__logo-link__content">
                    <img src={branding.logoPath} alt="Logo" />
                    <span>Logo</span>
                </div>
            </Link>

            <div className="navbar__buttons">
                <Link to="/present" className="navbar__buttons__present">
                    Present
                </Link>
                <button
                    className="navbar__buttons__add-credential"
                    onClick={() => addCredential()}
                >
                    {isPending ? 'Adding...' : 'Add credential'}
                </button>

                <button
                    className="navbar__buttons__language-switcher"
                    onClick={toggleLanguage}
                >
                    {language}
                </button>
            </div>
        </nav>
    )
}
