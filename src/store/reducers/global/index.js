import { combineReducers } from 'redux';
import { globalDataReducer as globalData } from './global-data';
import { layoutReducer as layout } from './layout';
import { userInfoReducer as userInfo } from './user-info';

export default combineReducers({ globalData, layout, userInfo });
