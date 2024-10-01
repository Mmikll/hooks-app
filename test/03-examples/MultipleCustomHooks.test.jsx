import { fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('test on <MultipleCustomHooks/>', () => {

    const incrementMock = jest.fn()
    useCounter.mockReturnValue({
        counter : 1,
        increment : incrementMock
    })

    beforeAll(() => {
        jest.clearAllMocks()
    })

    test('should show default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
        })
        
    render(<MultipleCustomHooks />) 
    
    expect( screen.getByText("Loading"))
    expect( screen.getByText("Informacion de Pokemon"))

    // Should add more test then

    screen.debug()
})
    test('should show a sprite ', () => {

        useFetch.mockReturnValue({
            data: { 
                id: 1,
                name: 'bulbasaur',
                sprites: [
                    { 
                      front_default: '',
                      front_shiny: '',
                      back_default: '',
                      back_shiny: ''
                    }
                ]},
            isLoading: false,
            hasError: null,
        })
    

        render(<MultipleCustomHooks />)
    


        screen.debug()

    })

    test('should call to After', () => {

        useFetch.mockReturnValue({
            data: { 
                id: 1,
                name: 'bulbasaur',
                sprites: [
                    { 
                      front_default: '',
                      front_shiny: '',
                      back_default: '',
                      back_shiny: ''
                    }
                ]},
            isLoading: false,
            hasError: null,
        })
        render(<MultipleCustomHooks />)
        const afterButton = screen.getByRole('button',{name: 'after'});

        fireEvent.click(afterButton)

        expect(incrementMock).toHaveBeenCalled()

    })
    
    
    
})