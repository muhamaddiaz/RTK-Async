import { configureStore, Action } from '@reduxjs/toolkit'
import RootReducer, { RootState } from "./RootReducer"
import { ThunkAction } from 'redux-thunk'

const Store = configureStore({
  reducer: RootReducer
})

export type AppThunk = ThunkAction<void, RootState, unknown, Action<any>>

export default Store