import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios';
function App() {
  const [count, setCount] = useState(0)

  const connectionBackend = async () =>{
    let response = await Axios.get("http://localhost:8080/api/")
    console.log(response.data)
  }

  return (
    <>
      <button onClick={connectionBackend}>Connect</button>
    </>
  )
}

export default App
