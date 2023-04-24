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

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = 'Paris';

export const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export const MAX_TEXT_COMMENT = 300;

export const MIN_TEXT_COMMENT = 50;

export const MAX_GRADE = 5;

