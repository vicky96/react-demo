import { combineEpics } from 'redux-observable'
import { fetchUserListEpic } from './User/epic'

export const rootEpic = combineEpics(fetchUserListEpic)
