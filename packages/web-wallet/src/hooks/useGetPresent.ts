import { useQuery } from '@tanstack/react-query'
import { getPresentData } from '../utils/get-present-data'

export const useGetPresent = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['present'],
        queryFn: getPresentData,
    })

    return { data, isPending, error }
}
