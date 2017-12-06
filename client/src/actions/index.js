import axios from 'axios';
import { FETCH_USER } from './types';

// redux thunk automatically passes(aka curries) dispatch to action creators that return functions instead of actions
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logOut = () => async dispatch => {
  const res = await axios.get('/api/logout');
  dispatch({ type: FETCH_USER, payload: null });
};

// same as writing
// export const fetchUser = () => {
//   return function(dispatch) {
//     axios.get('/api/current_user')
//       .then(res => dispatch({type: FETCH_USER, payload: res}));
//   }
// }
