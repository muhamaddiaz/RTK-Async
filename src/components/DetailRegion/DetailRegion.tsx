import * as React from 'react'
import { RouteChildrenProps } from 'react-router-dom'

import { selectRegion } from '../../features/Corona/CoronaSlice'
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../app/RootReducer";

type TParams = { state: string }

const DetailRegion: React.FC<RouteChildrenProps<TParams>> = ({ history, match } : RouteChildrenProps<TParams>) => {
  const dispatch = useDispatch()
  const { selected } = useSelector((state: RootState) => ({...state.corona}))
  const { state } = match?.params!

  React.useEffect(() => {
    dispatch(selectRegion(state))
  }, [dispatch, state])

  const handleBack = () => {
    history.goBack()
  }

  return (
    <div>
      {
        selected && (
          <>
            <h1>{selected.state}</h1>
            <button onClick={handleBack}>Back</button>
            <div>
              <h3>{selected.active}</h3>
              <h3>{selected.deaths}</h3>
              <h3>{selected.cases}</h3>
              <h3>{selected.tests}</h3>
              <h3>{selected.updated}</h3>
            </div>
          </>
        )
      }
    </div>
  )
}

export default DetailRegion