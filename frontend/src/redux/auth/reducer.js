import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({ idToken: null, credentials: {}, errorMessage: null});

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return state.set('idToken', action.token);
    case actions.LOGIN_REQUEST:
    return state.set('credentials', action.credentials);
    case actions.LOGOUT:
      return initState;
    case actions.LOGIN_ERROR:
      return state.set('errorMessage', action.message);
    default:
      return state;
  }
}
