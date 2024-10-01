import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";
TodoItem
describe('test <TodoItem/>', () => {
    
    const todo = {
        id: 1,
        description: 'Soul Stone',
        done: false,
    }

    const onDeletTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('should return all the pendins', () => {
    

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeletTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />)

        const liElement = screen.getByRole('listitem')

        expect(liElement.className).toBe("list-group-item d-flex justify-content-between")

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain("align-self-center")

    })
    


    test('should return ToDo done', () => {
    
        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeletTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />)

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain("text-decoration-line-through")

    })

    test('should call ToggleTodo on click event', () => {
    
        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeletTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />)

            const spanElement = screen.getByLabelText('span')

            fireEvent.click(spanElement)
            expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })
    
    test('should call onDeletTodo', () => {
    
        render(
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeletTodoMock} 
                onToggleTodo={onToggleTodoMock}
            />)

            const buttonElement = screen.getByLabelText('button')

            fireEvent.click(buttonElement)
            expect( onDeletTodoMock ).toHaveBeenCalledWith(todo.id)
    })

})