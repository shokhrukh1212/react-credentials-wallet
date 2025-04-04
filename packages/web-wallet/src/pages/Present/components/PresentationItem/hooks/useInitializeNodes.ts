import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelectedNodes } from '@src/hooks/useSelectedNodes'
import { initializeSelectedNodes } from '@src/features/present/PresentSlice'
import { CredentialDetails } from '@src/types/common'
import { initializeNodes } from '../utils/initialize-nodes'

export const useInitializeNodes = (
    dataId: string,
    details: CredentialDetails[]
) => {
    const dispatch = useDispatch()
    const selectedNodes = useSelectedNodes()

    // Initialize selectedNodes in Redux based on the details array
    useEffect(() => {
        const hasInitializedNodes = Object.keys(selectedNodes).some((key) =>
            key.startsWith(`${dataId}.`)
        )
        if (!hasInitializedNodes) {
            const nodes = initializeNodes(details, [dataId])
            dispatch(initializeSelectedNodes(nodes))
        }
    }, [details, dataId, dispatch])
}
