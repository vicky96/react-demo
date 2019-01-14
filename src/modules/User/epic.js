import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { FETCHUSERLIST, FetchUserListSucceed } from './duck';

export const fetchUserListEpic = action$ => 
  action$.ofType(FETCHUSERLIST)
   .mergeMap(action => {
     const api = process.env.REACT_APP_API === 'mock' ? '/mock/json' : '/json';
     return ajax.getJSON(`${api}/test/userList?page=${action.payload.page}`).map(response => FetchUserListSucceed(response))
   })
