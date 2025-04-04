import { useEffect } from 'react'
import branding from '@src/branding'

export const useSetTitle = () => {
    useEffect(() => {
        document.title = branding.pageTitle
    }, [])
}
