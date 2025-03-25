import { useQuery } from '@tanstack/react-query'
import { getCredential } from '../utils/get-credential'

export const useGetCredential = (id: string) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['credential'],
        queryFn: getCredential.bind(null, id),
    })

    return { data, isPending, error }
}
