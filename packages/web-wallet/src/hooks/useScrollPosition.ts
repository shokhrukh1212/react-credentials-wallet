import { useEffect } from 'react'

export const useScrollPosition = (containerId: string) => {
    const throttle = (func: (...args: any[]) => void, delay: number) => {
        let lastCall = 0
        return (...args: any[]) => {
            const now = Date.now()
            if (now - lastCall >= delay) {
                func.apply(this, args)
                lastCall = now
            }
        }
    }

    function handleScroll() {
        const container = document.getElementById(containerId)
        if (container) {
            history.replaceState(
                { ...history.state, scrollPosition: container.scrollTop },
                ''
            )
        }
    }

    useEffect(() => {
        const container = document.getElementById(containerId)

        if (!container) return

        if (history.state?.scrollPosition) {
            container.scrollTo(0, history.state.scrollPosition)
        }

        const throttledHandleScroll = throttle(handleScroll, 100)
        container.addEventListener('scroll', throttledHandleScroll)

        return () => {
            container.removeEventListener('scroll', throttledHandleScroll)
        }
    }, [containerId])

    return {}
}
