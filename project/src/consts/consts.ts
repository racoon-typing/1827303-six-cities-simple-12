export enum AppRoute {
  Root = '/',
  Login = '/login',
  OfferId = '/offer/:id',
  NotFound = '/not-found'
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export const URL_MARKER_DEFAULT =
  'img/pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin-active.svg';


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;


export enum NameSpace {
  Main = 'MAIN',
  Data = 'DATA',
  User = 'USER',
}
