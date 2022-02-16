import React, { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Percents from "./components/Percents/Percents"

function App() {
  const [currentTime, setTime] = useState('day')
  const updateTime = childData => setTime(childData)
  return (
    <>
      <Navbar updateFromChild = { updateTime } />
      <Percents time={currentTime} />
    </>
  )
}

export default App
