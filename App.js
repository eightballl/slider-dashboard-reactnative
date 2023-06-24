import React, { useState } from 'react'
import Geser from './Geser'
import Dashboard from './Dashboard'

const App = () => {
  const [showOnBoard,setShowOnBoard] = useState(true);

  const handleOnBoardFinish = () => {
    setShowOnBoard(false);
  }

  return(
    <>
  {showOnBoard &&<Geser handleDone={handleOnBoardFinish} />}
  {!showOnBoard &&<Dashboard/>}
  </>
  
  ) 
}

export default App