import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { initializeNodes } from '../utils/initialize-nodes'
import { initializeSelectedNodes } from '../features/present/PresentSlice'
import { CredentialDetails } from '../types/common'

export const useInitializeNodes = (
    dataId: string,
    details: CredentialDetails[]
) => {
    const dispatch = useDispatch()
    const selectedNodes = useSelector(
        (state: RootState) => state.presentStore.selectedNodes
    )

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
