import { useQuery } from '@tanstack/react-query'
import { getCredential } from '../utils/get-credential'

export const useGetCredential = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['credential'],
        queryFn: getCredential,
    })

    return { data, isPending, error }
}
