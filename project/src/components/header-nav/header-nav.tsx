import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';
import { UserData, getUserData } from '../../services/user-data';


export function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  // Получает логин и аватарку поьзователя
  const userData = getUserData();

  let userInfo;
  if (userData) {
    const savedUserInfo = JSON.parse(userData) as UserData;
    userInfo = savedUserInfo;
  }

  const dispatch = useAppDispatch();
  function logOut() {
    dispatch(logoutAction());
  }

  const noAuth = authStatus === 'NO_AUTH';

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              {userInfo?.avatarUrl ? (
                <img style={{ borderRadius: '50%' }} src={userInfo?.avatarUrl} alt="Avatar" />
              ) : null}
            </div>
            <span className="header__user-name user__name">{userInfo?.email}</span>
          </div>
        </li>
        <li className="header__nav-item">
          {noAuth ? (
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


