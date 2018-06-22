import { fromJS } from 'immutable';

// Action Type
export const FETCHUSERLIST = 'FETCHUSERLIST';
export const FETCHUSERLISTSUCCEED = 'FETCHUSERLISTSUCCEED';

// Action
export const FetchUserList = () => ({
  type: FETCHUSERLIST
})

export const FetchUserListSucceed = data => ({
  type: FETCHUSERLISTSUCCEED,
  payload: {
    userList: data
  }
})

export const initialState = fromJS({
  userList: []
})

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSERLISTSUCCEED: {
      return state.set('userList', fromJS(action.payload.userList))
    }

    default:
      return state
  }
}
