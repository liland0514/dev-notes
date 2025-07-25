import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
         測試按鈕
          </button>
      </div>
      
    </>
  )
}

export default App
