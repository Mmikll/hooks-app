import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')

describe('test <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos: [
            {id: 1, description :'Todo#1', done: false},
            {id: 1, description :'Todo#2', done: false},
        ], 
        todosCount: 2, 
        pendingTodoCounts: 1, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleNewTodo: jest.fn(),
    })
    
    test('should show component', () => {
    
        render(<TodoApp />)

        expect( screen.getByText('Todo#1') ).toBeTruthy()
        expect( screen.getByText('Todo#2') ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy()

    })
    




})