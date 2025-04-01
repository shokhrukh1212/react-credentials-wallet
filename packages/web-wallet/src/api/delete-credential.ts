import { BASE_URL } from '../constants'

export const deleteCredential = async (id: string) => {
    const response = await fetch(`${BASE_URL}/credentials/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
        throw new Error('Failed to delete credential')
    }

    return response.json()
}
