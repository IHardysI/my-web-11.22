"use client"

import { useState,useEffect } from 'react'
import Frame from '../components/Frame'

function App() {

  const [mainColor, setMainColor] = useState<string[]>([])

  
  useEffect(() => {
    console.log(mainColor);
    
  }, [mainColor])
  return (
    <div className="w-full h-screen max-w-screen-xl relative mx-auto flex justify-center items-center">
        <Frame setMainColor={setMainColor}/>
    </div>
  )
}

export default App
