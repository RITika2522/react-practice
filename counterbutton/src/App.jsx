import { useState } from 'react'
import './App.css'

function App() {
  let [reader, setReader] = useState(10)

  let add =() =>{
    if (reader > 20){
      alert("Counter cannot count more than 20 or equal to 20")
      return
    }
    setReader(reader++) 
    // count++
    console.log(reader)
  }
  let minus =() =>{
    if (reader < 0){
      alert("Counter cannot count less than 0")
      return
    }
    setReader(reader--)
    // count--
    console.log(reader)
  }
  return (
    <>
      <h1>Count: {reader}</h1>

      <button onClick={add} disabled={reader >= 20}>+</button>
      <button onClick={minus} disabled={reader <= 0}>-</button>
    </>
  )
}

export default App
