
const auth = {                                  // auth route
  
  login: '/auth/login',                // post
  register: '/auth/register',          // post
  
  token: '/auth/token',                // get        user athorization
  down: '/auth/down',                  // put        user delete but don't remove in collection
}

const admin = {
  user: '/admin/users',         // admin user manage api
  shop: '/admin/shop',
}

const user = {
  profile: '/user/profile',
}

const shop = '/shop'
const gallery = '/gallery'

const API_URL = {
  auth, admin, user, shop, gallery
};

export default API_URL;
export const BASE_URL = '/api/v1';