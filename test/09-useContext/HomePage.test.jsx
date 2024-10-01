import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { HomePage } from "../../src/09-useContext/HomePage"

describe('test <HomePage/>', () => {
    
    const user = {
        id:1,
        name: 'Miguel'
    }

    test('should show component without user', () => {
    
        render( 
            <UserContext.Provider value={{user:null}}>
                <HomePage/>
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')

        //screen.debug()

        expect( preTag.innerHTML ).toBe("null")

    })
    

    test('should show component with user', () => {
    
        render( 
            <UserContext.Provider value={{user:user}}>
                <HomePage/>
            </UserContext.Provider>
        )
        
        const smallTag = screen.getByLabelText('small')
        screen.debug()

        expect(smallTag.innerHTML).toBe(`${user.name}`)
        
    })




})