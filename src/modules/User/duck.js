import { fromJS } from 'immutable';

// Action Type
export const FETCHUSERLIST = 'FETCHUSERLIST';
export const FETCHUSERLISTSUCCEED = 'FETCHUSERLISTSUCCEED';

// Action
export const FetchUserList = page => ({
  type: FETCHUSERLIST,
  payload: {
    page
  }
})

export const FetchUserListSucceed = data => ({
  type: FETCHUSERLISTSUCCEED,
  payload: {
    userList: data
  }
})

export const initialState = fromJS({
  userList: [],
  isLoading: false
})

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHUSERLIST: {
      return state.set('isLoading', true)
    }
    case FETCHUSERLISTSUCCEED: {
      return state.set('userList', fromJS(action.payload.userList)).set('isLoading', false)
    }

    default:
      return state
  }
}
