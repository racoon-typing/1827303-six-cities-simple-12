import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts/consts';
import { mainProcess } from './main-process/main-process';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Main]: mainProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
