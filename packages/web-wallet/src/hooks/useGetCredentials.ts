import { useQuery } from '@tanstack/react-query'
import { getCredentials } from '../api/get-credentials'

export const useGetCredentials = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['credentials'],
        queryFn: getCredentials,
    })

    return { credentials: data, isPending, error }
}
