import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';
import { UserData, getUserData } from '../../services/user-data';


export function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

  const userData = getUserData();
  const savedUser = JSON.parse(userData) as UserData;
  const {avatarUrl, email} = savedUser;
  console.log(avatarUrl);
  console.log(email);

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
              <img style={{borderRadius: '50%'}} src={`${avatarUrl}`} alt="Avatar" />
            </div>
            <span className="header__user-name user__name">{email}</span>
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


