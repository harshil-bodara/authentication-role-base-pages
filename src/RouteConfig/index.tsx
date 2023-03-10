
const Roles = {
  business: 'business',
    admin: 'admin'
  };

  export const RouteNames = {
    login: '/',
    businessDashboiard: '/business/dashboard',
    admin: '/dashboard',
    home:"/home/",
    homeID:"/home/[id]"
  };

const routeConfig: { [key: string]: { [key: string]: string } } = {
  auth: {
    default: RouteNames.login,
    [RouteNames.login]: RouteNames.login,
  },
  [Roles.business]: {
    default: RouteNames.businessDashboiard,
    [RouteNames.businessDashboiard]: RouteNames.businessDashboiard,
    [RouteNames.home]: RouteNames.home,
    [RouteNames.homeID]: RouteNames.homeID,
  },
  [Roles.admin]: {
    default: RouteNames.admin,
    [RouteNames.admin]: RouteNames.admin,
    [RouteNames.home]: RouteNames.home
  },

};

export default routeConfig;