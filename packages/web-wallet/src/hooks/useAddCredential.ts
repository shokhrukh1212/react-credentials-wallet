import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addCredential } from '../api/add-credential'

export const useAddCredential = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addCredential,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['credentials'] })
        },
    })
}
