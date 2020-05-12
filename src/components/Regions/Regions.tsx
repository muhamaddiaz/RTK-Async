import * as React from 'react'
import { StateInfo } from '../../interfaces/Corona'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Region from "./Region/Region";
import DetailRegion from "../DetailRegion/DetailRegion";
import { selectRegion } from '../../features/Corona/CoronaSlice'

import styles from './regions.module.css'

interface IProps {
  StateInfo: StateInfo[]
}

const Regions: React.FC<IProps> = ({ StateInfo }: IProps) => {
  const dispatch = useDispatch()

  const clickAction = (state: string) => {
    dispatch(selectRegion(state))
  }

  return (
    <Switch>
      <Route path={"/:state"} exact render={(routeProps) => (
        <DetailRegion {...routeProps} />
      )} />
      <Route path={"/"} exact render={(routeProps) => (
        <div className={styles.Regions}>
          {StateInfo.map((_state, index) => (
            <Region clickAction={clickAction} RegionState={_state} key={index} {...routeProps} />
          ))}
        </div>
      )}/>

    </Switch>

  )
}

export default Regions