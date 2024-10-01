import { renderHook, act } from "@testing-library/react"
import {useForm} from '../../src/hooks'


describe('test useForm', () => { 

    const initialForm = {
        name: 'pepe',
        email: 'pepe@gmail.com',
        password: '123456'
    }
    
    test('should return default values', () => {
        
        const { result } = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            password: initialForm.password,
            formState: initialForm,
            onInputChange : expect.any(Function),
            onResetForm : expect.any(Function)
        })

    })

    test('should change name in form', () => {
        const newName = 'Juan'

        const { result } = renderHook(() => useForm(initialForm))

        const {onInputChange} = result.current

        
        act( () => {
            onInputChange({target:{name: 'name',value: newName}})
        })

        expect(result.current.name).toBe(newName)
        expect(result.current.formState.name).toBe(newName)

    })

    test('should reset form', () => {
        const newName = 'Juan'

        const { result } = renderHook(() => useForm(initialForm))

        const {onInputChange, onResetForm} = result.current

        
        act( () => {
            onInputChange({target:{name: 'name',value: newName}})
            onResetForm()
        })



        expect(result.current.name).toEqual(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

    })
    


})