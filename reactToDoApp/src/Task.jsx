export const Task = (props) => {
    return (<div 
        style={{backgroundColor: props.complete ? "green" : "white"}}>
        <li>{props.taskName}</li>
        <button onClick = {() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deletTask(props.id)}>X</button>
      </div>)
}