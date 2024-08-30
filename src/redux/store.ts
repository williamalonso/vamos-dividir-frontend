// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from '@/redux/slices/tableSlice';

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;