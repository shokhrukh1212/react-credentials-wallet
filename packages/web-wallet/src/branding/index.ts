import branding1 from './branding1.json'
import branding2 from './branding2.json'

const brandingMap: Record<string, any> = {
    branding1,
    branding2,
}

const brandingName = import.meta.env.VITE_BRANDING_NAME || 'branding1'

const branding = brandingMap[brandingName] || {
    primaryColor: '#000',
    logoPath: '/icons/wallet.svg',
    pageTitle: 'Default Brand Title',
}

export default branding
