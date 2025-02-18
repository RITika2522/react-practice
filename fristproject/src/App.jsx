import FirstApp from "./first"
import React from "react"

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloremque quia temporibus, molestiae facilis dicta tempore suscipit consectetur minima! Dolore cupiditate<br/> ratione vitae nisi, facilis soluta tempore expedita dignissimos tempora.</p>
      <FirstApp sal="10000" desig="Software Engineer" com="Google"/>
      <FirstApp sal="20000" com="Facebook"/>
      <FirstApp sal="30000" desig="Software Tester" com="Amazon"/>
    </>
  )
}

export default App
