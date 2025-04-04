// filepath: /Users/Apple/Shokhrukh Karimov/React/my-monorepo/packages/web-wallet/src/features/present/useSelectedNodes.ts
import { useSelector } from 'react-redux'
import { RootState } from '@src/store'

export const useSelectedNodes = () => {
    return useSelector((state: RootState) => state.presentStore.selectedNodes)
}
