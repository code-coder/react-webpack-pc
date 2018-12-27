import UserList from './containers/UserManagement/UserList';

export default {
  USER_MANAGEMENT: {
    key: 'USER_MANAGEMENT',
    title: '用户管理',
    route: '/user-management',
    icon: 'folder',
    component: UserList,
    children: { USER_LIST: { key: 'USER_LIST', title: '用户列表', route: '/user-list', component: UserList } }
  }
};
