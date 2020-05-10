import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateInfo } from '../../interfaces/Corona'
import { AppThunk } from '../../app/Store'
import { fetchCorona } from '../../api/LmaoCorona'

type CoronaType = {
  isLoading: boolean
  data: StateInfo[]
}

const initialState: CoronaType = {
  isLoading: false,
  data: []
}

const CoronaSlice = createSlice({
  name: "corona",
  initialState,
  reducers: {
    populateCorona: (state, action: PayloadAction<Array<StateInfo>>) => {
      action.payload.map(a => state.data.push(a))
    },
    startLoading: (state) => {
      state.isLoading = true
    },
    clearLoading: (state) => {
      state.isLoading = false
    }
  }
})

export const {
  populateCorona,
  startLoading,
  clearLoading
} = CoronaSlice.actions

export const fetchData = (): AppThunk => async dispatch => {
  try {
    dispatch(startLoading())
    const states = await fetchCorona()
    dispatch(populateCorona(states))
    dispatch(clearLoading())
  } catch (err) {
    throw err
  }
}

export default CoronaSlice.reducer