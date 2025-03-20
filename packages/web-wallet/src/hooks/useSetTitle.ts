import { useEffect } from 'react'
import branding from '../branding'

export const useSetTitle = () => {
    useEffect(() => {
        document.title = branding.pageTitle
    }, [])
}
