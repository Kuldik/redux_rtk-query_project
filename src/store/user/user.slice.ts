import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserById } from './user.actions';
import { IUser } from '../../types/user.types';
import { IInintialState } from '../../types/user.types';

const initialState: IInintialState = {
    isLoading: false,
    error: null,
    user: {} as IUser
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(getUserById.pending, state => {
            state.isLoading = true
        })
        builder
        .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder
        .addCase(getUserById.rejected, (state, action: any)=> {
            state.isLoading = false
            state.error = action.payload.error
            state.user = {} as IUser
        })
    }
})
