

export const InputTodo = (props) => {
    return (
        <>
            <input className="input-add" value={props.todo}
                onChange={(e) => props.setTodo(e.target.value)} />
            <button className="btn" onClick={() => props.addTask()}>Добавить</button>
        </>
    )
};