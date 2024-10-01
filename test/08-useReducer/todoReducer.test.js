import { todoReducer } from "../../src/08-useReducer/todoReducer"

todoReducer
describe('testing todoReducer', () => { 

    const initailState = [{
        id: 1,
        description: "Demo Todo",
        done: false,
    }]


    test('should return initialState', () => {
    
        
        const newState = todoReducer(initailState, {})

        expect(newState).toBe(initailState)


    })
    
    
    test('should add ToDo', () => {
    
        const action = {
            type : "[TODO] Add Todo",
            payload: {
                id: 2,
                description: "Another Todo",
                done: false,
            }   
        }

        const newState = todoReducer(initailState, action)

        expect(newState.length).toBe(2)

        expect(newState).toContain(action.payload)
    })

    test('should delete a ToDo', () => {
    
        const action = {
            type : "[TODO] Remove Todo",
            payload: 1
        }
        const newState = todoReducer(initailState, action)

        expect(newState.length).toBe(0)

    })
    
    test('should toogle a ToDo', () => {
    
        const action = {
            type : '[TODO] Toogle Todo',
            payload: 1
        }
        const newState = todoReducer(initailState, action)

        expect(newState[0].done).toBe(true)

    })
    


})