import { AuthorizationStatus, NameSpace } from '../../consts/consts';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State): string => state[NameSpace.User].email;
export const getUserAvatarUrl = (state: State): string => state[NameSpace.User].avatarUrl;
