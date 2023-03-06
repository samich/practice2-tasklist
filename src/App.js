import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
//import Boxes from './Components/Boxes';
import { useState } from "react";

function App() {

    let defaultTasks = [
        {
            id: 4398,
            name: 'Get the coffee machine fixed',
            complete: true
        },
        {
            id: 1854,
            name: 'Buy grocery',
            complete: true
        },
        {
            id: 1691,
            name: 'Lunch with John doe',
            complete: true
        }
    ];

    let [taskList, setTaskList] = useState(defaultTasks);
    
    return(
        <div className="app">
            <Header title="My App List" />
            <AddTask taskList={taskList} setTaskList={setTaskList} />
            <TaskList taskList={taskList} setTaskList={setTaskList} />            
            
        </div>

    );
}

export default App;