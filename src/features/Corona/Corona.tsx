import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../features/Corona/CoronaSlice'
import { RootState } from '../../app/RootReducer'
import Regions from "../../components/Regions/Regions";

const Corona = () => {
  const dispatch = useDispatch()
  const { data, isLoading } = useSelector((state: RootState) => {
    return {
      ...state.corona
    }
  })

  React.useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (isLoading) {
    return <div>Fetching Some Data!</div>
  }

  return (
    <div>
      <Regions StateInfo={data} />
    </div>
  )
}

export default Corona