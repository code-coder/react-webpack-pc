import { createActions } from 'redux-actions';

const actionTypes = {
  GET_USER_INFO_START: 'GET_USER_INFO_START',
  GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
  GET_USER_INFO_FAILED: 'GET_USER_INFO_FAILED',
  UPDATE_USER_INFO_START: 'UPDATE_USER_INFO_START',
  UPDATE_USER_INFO_SUCCESS: 'UPDATE_USER_INFO_SUCCESS',
  UPDATE_USER_INFO_FAILED: 'UPDATE_USER_INFO_FAILED'
};

const {
  getUserInfoSuccess,
  getUserInfoStart,
  getUserInfoFailed,
  updateUserInfoSuccess,
  updateUserInfoStart,
  updateUserInfoFailed
} = createActions({
  [actionTypes.GET_USER_INFO_START]: payload => payload,
  [actionTypes.GET_USER_INFO_SUCCESS]: payload => payload,
  [actionTypes.GET_USER_INFO_FAILED]: payload => payload,
  [actionTypes.UPDATE_USER_INFO_START]: payload => payload,
  [actionTypes.UPDATE_USER_INFO_SUCCESS]: payload => payload,
  [actionTypes.UPDATE_USER_INFO_FAILED]: payload => payload
});

export {
  actionTypes,
  getUserInfoSuccess,
  getUserInfoStart,
  getUserInfoFailed,
  updateUserInfoSuccess,
  updateUserInfoStart,
  updateUserInfoFailed
};
