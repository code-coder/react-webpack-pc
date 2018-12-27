import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/global/global-data';
const initState = { };

const globalDataReducer = handleActions(
  {
    [actionTypes.SET_GLOBAL_DATA]: (state, { payload }) => ({ ...state, ...payload })
  },
  initState
);

export { globalDataReducer };
