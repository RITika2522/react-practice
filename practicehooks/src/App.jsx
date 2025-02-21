import { useState } from 'react'

function App() {
  const [showText, setShowText] = useState(false);
  const [textColor, setTextColor] = useState("black");

  const changeColor = () => {
    setTextColor(textColor === "black" ? "red" : "black");
  }
  const toggleText = () => {
    setShowText(!showText);
  }
  // const [age,setAge] = useState(0);
  // const [input,setInput] = useState("Enter Name:");
  // const inputChange = (e) => {
  //   setInput(e.target.value); 
  // }
  // const incAge = () =>{
  //   setAge(age++);
  // }
  // const dscAge = () =>{
  //   setAge(age--);
  // }
  return (
    <>
      {/* <h1>{age}</h1>
      <button onClick={incAge}>Increase</button>
      <button onClick={dscAge}>Decrease</button>
      <br />
      <input type="text" onChange={inputChange} /> 
      <p>{input}</p> */}
      <button style={{color: changeColor}}>Show/Hide</button>
      {showText && <h2>Hi my name is Ritika</h2>}

    </>
  )
}

export default App
