import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { getAuthorizationStatus, getUserAvatarUrl, getUserEmail } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/api-actions';


export function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const email = useAppSelector(getUserEmail);
  const avatarUrl = useAppSelector(getUserAvatarUrl);

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
              {avatarUrl && !noAuth ? (<img style={{borderRadius: '50%'}} src={`${avatarUrl}`} alt="Avatar" />) : null}
            </div>
            {noAuth ? (
              null
            ) : (
              <span className="header__user-name user__name">{email}</span>
            )}
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


