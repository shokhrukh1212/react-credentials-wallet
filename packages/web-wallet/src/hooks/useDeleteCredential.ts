import { useMutation, useQueryClient } from '@tanstack/react-query'
import { BASE_URL } from '../constants'
import { useNavigate } from 'react-router'

export const useDeleteCredential = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })

            if (!response.ok) {
                throw new Error('Failed to delete credential')
            }

            return response.json()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['credentials'] })
            queryClient.refetchQueries({ queryKey: ['credentials'] })
            navigate('/credentials')
        },
    })
}
