import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{activeCity: string}>('main/changeCity');
export const fillCities = createAction('app/fillCities');
