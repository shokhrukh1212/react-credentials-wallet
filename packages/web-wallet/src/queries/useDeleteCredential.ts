import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { deleteCredential } from '@src/api/delete-credential'

export const useDeleteCredential = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: deleteCredential,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['credentials'] })
            navigate('/credentials')
        },
    })
}
