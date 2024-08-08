import React from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import Laplist from './Laplist'

import './Timer.css';

const Timer = () => {
  return <div className="timer-container">
    <TimerDisplay/>
    <TimerControls/>
    <Laplist/>
  </div>
  
}

export default Timer