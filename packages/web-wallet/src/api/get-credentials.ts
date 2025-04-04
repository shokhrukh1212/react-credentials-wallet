import { BASE_URL } from '@src/constants'
export const getCredentials = async () => {
    try {
        const response = await fetch(`${BASE_URL}/credentials`)

        if (!response.ok) {
            throw new Error('Failed to fetch credentials')
        }

        return await response.json()
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message)
    }
}
