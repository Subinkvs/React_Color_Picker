import React, {useState} from "react";

function ToDoList(){

const [task, setTask] = useState(["Wake up", "Bath", "Office", "Home", "Sleep"]);
const [newTask, setNewTask] = useState("");


function handleInputChange(event){
    setNewTask(event.target.value)

}

function addTask(){
    setTask(t => [...t, newTask]);
    setNewTask("");
}

function deleteTask(index){
    setTask(task.filter((_, i) => i !== index))
}

function MoveTaskUp(index){

    if(index > 0){
        const updatedTask = [...task];

        [updatedTask[index], updatedTask[index - 1]] = 
        [updatedTask[index - 1], updatedTask[index]]
        setTask(updatedTask);
    }
}

function MoveTaskDown(index){

    if(index < task.length - 1){
        const updatedTask = [...task];

        [updatedTask[index], updatedTask[index + 1]] = 
        [updatedTask[index + 1], updatedTask[index]]
        setTask(updatedTask);
    }
}


return(
    <div>
        <h2>To-Do-List</h2>
        <div>
            <input type="text" onChange={handleInputChange} placeholder="Enter Your Task.."/>
            <button onClick={addTask}>Add</button>
            
        </div>

    <ol>
        {task.map((task, index) => 
        <li key={index}> 
        <span >{task}</span>
        <button onClick={() => deleteTask(index)}>Delete</button>
        <button onClick={() => MoveTaskUp(index)}>Up</button>
        <button onClick={() => MoveTaskDown(index)}>Down</button>
        </li>
        
        )}
       
    </ol>
    </div>

   
)

}

export default ToDoList