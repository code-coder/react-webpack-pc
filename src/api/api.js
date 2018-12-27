import proxyFetch from './proxyFetch';

// login
export const signin = (params, settings) => proxyFetch.post('/token/username', params, settings);
export const getUserInfo = (params, settings) => proxyFetch.get('/token/username', params, settings);
export const updateUserInfo = (params, settings) => proxyFetch.post('/token/username', params, settings);
