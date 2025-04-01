import { BASE_URL } from '../constants'
export const getPresentData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/presentation`)

        if (!response.ok) {
            throw new Error('Failed to fetch present data')
        }

        return await response.json()
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message)
    }
}
