import { combineSlices, configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites/favorites.slice'
import { userSlice } from './user/user.slice'
import { api } from './api/api.js'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true
})

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer 
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware).concat(logger) // include api.middleware
})

export type RootState = ReturnType<typeof store.getState>