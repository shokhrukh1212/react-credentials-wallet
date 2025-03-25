export const throttle = (func: (...args: any[]) => void, delay: number) => {
    let lastCall = 0
    return (...args: any[]) => {
        const now = Date.now()
        if (now - lastCall >= delay) {
            func.apply(this, args)
            lastCall = now
        }
    }
}
