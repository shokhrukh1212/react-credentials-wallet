import { BASE_URL } from '../constants'
export const getCredential = async (id: string) => {
    try {
        const response = await fetch(`${BASE_URL}/credentials/${id}`)

        if (!response.ok) {
            throw new Error('Failed to fetch credential')
        }

        return await response.json()
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message)
    }
}
