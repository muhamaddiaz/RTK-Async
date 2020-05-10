import { combineReducers } from '@reduxjs/toolkit'
import CoronaReducer from '../features/Corona/CoronaSlice'

const RootReducer = combineReducers({
  corona: CoronaReducer
})

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer