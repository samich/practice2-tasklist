function Task({task, handleDelete}) {
    return (
        <li>
            <span>{task.name}</span>
            <button className="btn-delete" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
    );
}

export default Task;