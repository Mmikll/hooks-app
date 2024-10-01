import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"


describe('test <LoginPage/>', () => {

    const user = {
        id: 123,
        name: "pep",
        email: "pep@gmail.com"
    }

    const setUserMock = jest.fn()

    test('should show component withut user', () => { 

        render( 
            <UserContext.Provider value={{user:null, setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        //screen.debug()

        expect(preTag.innerHTML).toBe(`${null}`)

    })

    test('should call setUser onClick', () => { 

        render( 
            <UserContext.Provider value={{user:null, setUser:setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        )

        const buttonTag = screen.getByLabelText('button')
        
        fireEvent.click(buttonTag)
        
        expect(setUserMock).toHaveBeenCalledWith(user)

        //screen.debug()

    })


})