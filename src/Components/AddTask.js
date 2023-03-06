import { useState } from 'react';
import './AddTask.css';

function AddTask({taskList, setTaskList}) {

    let [taskName, setTaskName] = useState("");
    let [status, setStatus] = useState(false);

    function handleChangeValue(e) {
        setTaskName(e.target.value);
    }

    function handleReset() {
        setTaskName("");
    }

    function handleChangeSelect(e){        
        setStatus(Boolean(e.target.value));
    }


    function handleAdd(e) {

        e.preventDefault();

        let newTask = {
            id: Math.floor( Math.random() * 10000 ),
            name: taskName,
            completed: status
        };

        setTaskList([...taskList, newTask]);
        console.log(taskList);
        handleReset();
    }

    return (
        <div className="add-task">
            <form>
                <label htmlFor="taskName"></label>
                <input type="text" name="taskName" id="taskName" className="input" onChange={handleChangeValue} value={taskName} />
                <select name="status" onChange={handleChangeSelect}>
                    <option value="false">Pending</option>
                    <option value="true">Complete</option>
                </select>
                <button onClick={handleAdd}>Add task</button>
                <span className="reset" onClick={handleReset}>Reset</span>
            </form>
            <p className="preview">{taskName}</p>            
        </div>
    );
}

export default AddTask;