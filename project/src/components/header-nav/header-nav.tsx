import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';

import { getAuthorizationStatus } from '../../store/user-process/selectors';


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
            <div className="header__nav-link" onClick={logOut}>
              <span className="header__signout">Sign out</span>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default memo(HeaderNav);

// export default memo(HeaderNav, (prevProps, nextProps) => {
//   const compare = prevProps.NoAuth === nextProps.NoAuth;
//   return compare;
// });


