import React, {useState} from 'react';
import "./todoApp.css";

function TodoApp() {

    const [tasklist, setTasklist] = useState([]);

    const [task, setTask] = useState("");

    const handleChange = (e)=>{
        setTask(e.target.value);
    };

    const AddTask = ()=>{
        if (task !== ""){
            const taskDetails ={
                id: Math.floor(Math.random()*1000),
                value: task,
                isComplete:false,
            }

            setTasklist([...tasklist,taskDetails]);
        }
    };

    const deletetask = (e, id) =>{
        e.preventDefault();
        setTasklist(tasklist.filter((t)=> t.id !== id));
    };

    const taskCompleted = (e, id) =>{
        e.preventDefault();
        const element = tasklist.findIndex(elem => elem.id ===id);
        const newTasklist = [...tasklist];
        newTasklist[element] ={
            ...newTasklist[element],
            isComplete:true,
        };
        setTasklist(newTasklist);
    };


    return (
        <div className="todo">
            <input type="text" name="text" id="text" onChange={(e)=>handleChange(e)} placeholder="Add task here..." />
            <button className="add-btn" onClick={AddTask}>Add</button><br />
            {tasklist !== [] ? ( <ul> {tasklist.map((t)=>(
                <li className={t.isComplete ? "crossText":"listitem"}> {t.value}
                <button className="completed" onClick={e=> taskCompleted(e, t.id)}>Completed</button>
                <button className="delete" onClick={e=> deletetask(e, t.id)} >Delete</button></li>
            ))}  </ul> ) : null }
        </div>
    );
}

export default TodoApp
