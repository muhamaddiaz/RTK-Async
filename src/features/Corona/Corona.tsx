import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../features/Corona/CoronaSlice'
import { RootState } from '../../app/RootReducer'

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

  return (
    <div>
      { isLoading ? (<div>Still Fetching</div>) : (
        <div>
          <ul>
            {
              data.map((d, idx) => (
                <li key={idx}>{d.state}</li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default Corona