import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<{activeCity: string}>('main/changeCity');
export const changeOfferList = createAction<{cityName: string}>('main/filterCities');
export const hoverCity = createAction<{hoveredCity: number}>('main/hoverCity');
export const changeOption = createAction<{filterName: string}>('main/filterCity');
