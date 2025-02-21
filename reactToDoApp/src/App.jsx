import { useState } from 'react'
import './App.css'
import {Task} from './Task.jsx'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("") 

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    const todo = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id+1,
      taskName: newTask,
      isCompleted: false
    }
    setTasks([...tasks,todo])
    setNewTask("")
  }

  const deletTask = (id) => {
    
    // const arr = ["pedro", "jessica", "james"]
    // const newArr = arr.filter((name) => {
    //   if (name === "pedro"){
    //     return false
    //   }else{
    //     return true
    //   }
    // })
    setTasks(tasks.filter((todo) => todo.id !== id))
  }

  const completeTask = (id) => { 
    setTasks(tasks.map((todo) => {
      if(todo.id === id){
        return {...todo, isCompleted: !todo.isCompleted}
      }else{
        return todo
      }
    }))

  }

  return (
    <>
      <div className='App'>
        <div className="addTask">
          <input type="text" onChange={handleChange}/> 
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="taskList">
          <ul>
            {tasks.map((todo) => {
              return <Task 
                taskName = {todo.taskName} 
                id = {todo.id} 
                complete = {todo.isCompleted}
                completeTask = {completeTask}
                deletTask = {deletTask}
              />
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
