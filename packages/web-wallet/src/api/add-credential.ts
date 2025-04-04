import { BASE_URL } from '@src/constants'

export const addCredential = async () => {
    const response = await fetch(`${BASE_URL}/credentials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
        throw new Error('Failed to add credential')
    }

    return response.json()
}
