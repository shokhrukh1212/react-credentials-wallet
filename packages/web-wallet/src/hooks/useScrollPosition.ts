import { useEffect, useRef } from 'react'
import { throttle } from '@src/utils/throttle'

export const useScrollPosition = (containerId: string) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    function handleScroll() {
        if (containerRef.current) {
            history.replaceState(
                {
                    ...history.state,
                    scrollPositions: {
                        ...history.state?.scrollPositions,
                        [containerRef.current.id]:
                            containerRef.current.scrollTop,
                    },
                },
                ''
            )
        }
    }

    useEffect(() => {
        const container = containerRef.current

        if (!container) return

        const savedPosition = history.state?.scrollPositions?.[container.id]
        if (savedPosition) {
            container.scrollTo(0, savedPosition)
        }

        const throttledHandleScroll = throttle(handleScroll, 100)
        container.addEventListener('scroll', throttledHandleScroll)

        return () => {
            container.removeEventListener('scroll', throttledHandleScroll)
        }
    }, [containerId])

    return containerRef
}
