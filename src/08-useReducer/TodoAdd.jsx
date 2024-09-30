import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onHandleSubmit = (e) => {
    e.preventDefault()
    if(description.length <= 1) return
    
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    onNewTodo && onNewTodo(newTodo)   
    onResetForm()
  }
  return (
    <form onSubmit={onHandleSubmit}>
      <input type="text" 
      placeholder="what's next?"
      className="form-control"
      name='description'
      value={description}
      onChange={onInputChange}
      />

      <button 
          type="submit"
          className="btn btn-outline-primary mt-2">
          Add
      </button>
    </form>
  )
}

