export interface AppRoutes {
  [key: string]: AppRouteData;
}

export interface AppRouteData {
  routerPath: string;
  fullPath: string;
}

/**
 * Todo use default url for main page
 */
export const routes: AppRoutes = {
  WELCOME: { routerPath: 'welcome', fullPath: 'welcome' },
  SIGN_IN: { routerPath: 'signIn', fullPath: 'welcome/signIn' },
  REGISTER: { routerPath: 'register', fullPath: 'welcome/register' },
  PASSWORD_RECOVERY: { routerPath: 'recovery', fullPath: 'welcome/recovery' },
  MAIN: { routerPath: 'main', fullPath: 'main' }
};
