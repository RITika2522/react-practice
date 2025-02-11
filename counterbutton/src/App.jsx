import { useState } from 'react'
import './App.css'

function App() {
  let [reader, setReader] = useState(10)

  let add =() =>{
    setReader(
      reader++
    )
    // count++
    console.log(reader)
  }
  let minus =() =>{
    setReader(reader--)
    // count--
    console.log(reader)
  }
  return (
    <>
      <h1>Count: {reader}</h1>

      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  )
}

export default App
