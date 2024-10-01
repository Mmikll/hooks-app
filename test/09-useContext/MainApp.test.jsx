import { MemoryRouter } from "react-router"
import { MainApp } from "../../src/09-useContext/MainApp"
import { render, screen } from "@testing-library/react"


describe('test <MainApp/>', () => {

    test('should show HomePage', () => {

        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy()
        //screen.debug()

    })


    test('should show LoginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )

        expect(screen.getByText('Login Page')).toBeTruthy()
        //screen.debug()

    })




})