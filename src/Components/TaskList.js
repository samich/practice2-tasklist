import {useState} from 'react';
import Task from './Task.js';

function TaskList({taskList, setTaskList}) {

    //let [taskList, setTasks]  = useState(listArr);
    let [show, setDisplay] = useState(true);

    function handleDisplay() {
        setDisplay(() => !show);
    }
    
    function handleDelete(id) {
        setTaskList(taskList.filter(task => task.id !== id));        
    }

    return(        
        <>        
            <div className="app-title">
                    <h1>My Todo List2</h1>
                    <button onClick={handleDisplay}>{show === true ? 'Hide' : 'Show'} list</button>
            </div>  

            <ul>
                {                    
                    show && taskList.map(task => (
                        <Task key={task.id} task= {task} handleDelete = {handleDelete} />
                    ))
                }
            </ul>
        </>

    );
}

export default TaskList;