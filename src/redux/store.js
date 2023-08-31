import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionsReducer from './Missions/missionsSlice';

// Determina si la aplicación está en modo de prueba
const isTestEnvironment = process.env.NODE_ENV === 'test';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (isTestEnvironment) {
      return getDefaultMiddleware();
    }
    return getDefaultMiddleware().concat(logger);
  },
});

export default store;
