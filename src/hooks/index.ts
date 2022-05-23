export { getDoc, useDocument } from './use-swr-document'
export { getDocs, useCollection } from './use-swr-collection'
export { useCollectionGroup, useExperimentalCollectionGroup } from './use-swr-collection-group'
export type {
  CollectionSWROptions,
  CollectionQueryType,
} from './use-swr-collection'
export {
  setDoc,
  updateDoc,
  deleteDoc,
  revalidateDoc,
  revalidateCollection,
} from './static-mutations'
