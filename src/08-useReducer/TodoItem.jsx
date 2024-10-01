
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {

  const handleDelete = () => onDeleteTodo(todo.id)

  return (
    <li  className="list-group-item d-flex justify-content-between">
        <span 
        className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' } `}
        onClick={ () => onToggleTodo( todo.id ) }
        aria-label="span">
          {todo.description}
        </span>
        <button 
        className="btn btn-danger" 
        onClick={handleDelete}
        aria-label="button">
          Delete
        </button>
    </li>   
  )
}
