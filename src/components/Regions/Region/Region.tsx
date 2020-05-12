import * as React from 'react'

import { StateInfo } from '../../../interfaces/Corona'
import {RouteChildrenProps} from 'react-router-dom'

import styles from './region.module.css'

interface IProps {
  RegionState: StateInfo,
  clickAction: Function
}

const Region: React.FC<IProps & RouteChildrenProps> = ({ RegionState, clickAction, history }: IProps & RouteChildrenProps) => {
  return (
    <div className={styles.Region} onClick={() => {
      clickAction(RegionState.state)
      history.push(RegionState.state.trim())
    }}>
      <h1>{RegionState.state}</h1>
      <ul>
        <li>{RegionState.cases}</li>
        <li>{RegionState.deaths}</li>
        <li>{RegionState.active}</li>
      </ul>
    </div>
  )
}

export default Region