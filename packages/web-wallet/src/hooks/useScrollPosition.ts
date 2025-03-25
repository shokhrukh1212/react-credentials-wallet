import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0)
    const location = useLocation()
    const scrollRef = useRef({ scrollTop: 0 })

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollPosition((event.target as HTMLDivElement).scrollTop)
    }

    useEffect(() => {
        if (location.state) {
            const { scrollPosition } = location.state
            setTimeout(() => {
                scrollRef.current.scrollTop = scrollPosition
            }, 10)
        }
    }, [])

    return { scrollRef, handleScroll, scrollPosition }
}
