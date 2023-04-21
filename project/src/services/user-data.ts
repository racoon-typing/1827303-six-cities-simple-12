const USER_DATA_KEY_NAME = 'user-data';

// export type UserData = {
//   avatarUrl: string;
//   email: string;
//   id: number;
//   isPro: boolean;
//   name: string;
//   token: string;
// };
export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
};


export const getUserData = (): string => {
  const userData = localStorage.getItem(USER_DATA_KEY_NAME);
  return userData ?? '';
};

export const saveUserData = (data: UserData): void => {
  localStorage.setItem(USER_DATA_KEY_NAME, JSON.stringify(data));
};

export const dropUserData = (): void => {
  localStorage.removeItem(USER_DATA_KEY_NAME);
};
