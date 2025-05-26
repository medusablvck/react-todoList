

export const TaskTodo = (props) => {
    return (
        <div className="tasks" key={props.id}>
            <input className="input__todo" type={'checkbox'} onClick={() => props.toggleTask(props.id)}></input>
            <p
                style={props.status ?
                    { textDecoration: 'line-through' } :
                    { textDecoration: 'none' }}>
                {props.value}
            </p>
            <button className="btn-delete" onClick={() => props.deleteTask(props.id)}>x</button>
        </div>
    )
};