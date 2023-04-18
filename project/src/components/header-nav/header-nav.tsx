import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';

import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';


export function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const NoAuth = authStatus === 'NO_AUTH';

  const dispatch = useAppDispatch();
  function logOut() {
    dispatch(logoutAction());
  }

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {NoAuth ? (
              null
            ) : (
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            )}
          </div>
        </li>
        <li className="header__nav-item">
          {NoAuth ? (
            <Link className="header__nav-link" to="/login">
              <span className="header__signout">Sign in</span>
            </Link>
          ) : (
            <Link className="header__nav-link" to="/" onClick={logOut}>
              <span className="header__signout">Sign out</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default memo(HeaderNav);


