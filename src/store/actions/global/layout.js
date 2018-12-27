import { createActions } from 'redux-actions';

const actionTypes = {
  CHANGE_LAYOUT: 'CHANGE_LAYOUT'
};

const { changeLayout } = createActions({
  [actionTypes.CHANGE_LAYOUT]: payload => payload
});

export { actionTypes, changeLayout };
