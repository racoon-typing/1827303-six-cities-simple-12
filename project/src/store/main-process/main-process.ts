import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts/consts';
import { MainProcess } from '../../types/state';

const initialState: MainProcess = {
  city: 'Paris',
  hoverCity: 0,
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{activeCity: string}>) => {
      const { activeCity } = action.payload;

      state.city = activeCity;
    },
    hoverCity: (state, action: PayloadAction<{hoveredCity: number}>) => {
      const { hoveredCity } = action.payload;

      state.hoverCity = hoveredCity;
    },
  }
});

export const {changeCity, hoverCity } = mainProcess.actions;
