
const initialState = [
    {
        id: 1,
        todo: "Collect soul stone ",
        done:  false,
    }
]

const todoReducer = (state = initialState, action = {}) =>{
//recordar que no se debe mutar, se debe retornar un nuevo estado
    switch (action.type) {
        case "[TODO] add todo":
            return [...state, action.payload]
            
        default:
            return state;
    }

    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: "Collect power stone ",
    done:  false,
}

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos})