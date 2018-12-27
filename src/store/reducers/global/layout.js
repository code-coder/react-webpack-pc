import { handleActions } from 'redux-actions';
import { actionTypes } from '../../actions/global/layout';
const initState = {};

const layoutReducer = handleActions(
  {
    [actionTypes.CHANGE_LAYOUT]: (state, { payload }) => ({ ...state, ...payload })
  },
  initState
);

export { layoutReducer };
