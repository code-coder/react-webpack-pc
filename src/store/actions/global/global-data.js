import { createActions } from 'redux-actions';

const actionTypes = {
  SET_GLOBAL_DATA: 'SET_GLOBAL_DATA',
  CHANGE_LAYOUT: 'CHANGE_LAYOUT'
};

const { setGlobalData } = createActions({
  [actionTypes.SET_GLOBAL_DATA]: payload => payload
});

export { actionTypes, setGlobalData };
