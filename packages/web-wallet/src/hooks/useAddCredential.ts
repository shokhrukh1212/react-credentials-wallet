import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BASE_URL } from '../constants'

export const useAddCredential = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async () => {
            const response = await fetch(`${BASE_URL}/credentials`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })

            if (!response.ok) {
                throw new Error('Failed to add credential')
            }

            return response.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['credentials'] })
        },
    })
}
