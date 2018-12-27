import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/global/user-info';

const initState = { isLogin: false };

const userInfoReducer = handleActions(
  {
    [actionTypes.GET_USER_INFO_SUCCESS]: (state, { payload }) => ({ ...payload, isLogin: true }),
    [actionTypes.UPDATE_USER_INFO_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        ...payload
      };
    },
    [actionTypes.UPDATE_USER_INFO_FAILED]: (state, { payload }) => {
      return state;
    }
  },
  initState
);

export { userInfoReducer };
