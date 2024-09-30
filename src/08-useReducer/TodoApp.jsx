import {TodoAdd, TodoList } from './index'
import {useTodo} from '../hooks/useTodo'

export const TodoApp = () => {

    const {todos, todosCount, pendingTodoCounts, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo()

return (
    <>
        <h1>TodoApp: {todosCount},<small> Pendings: {pendingTodoCounts}</small></h1>

        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                todos={todos} 
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
                />
            </div>

            <div className="col-5">
                <h4>Add Todo</h4>

                <hr />

                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>

    </>
  )
}

