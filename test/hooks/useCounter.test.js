import { renderHook, act } from "@testing-library/react"

import { useCounter } from "../../src/hooks"

describe('test in useCounter', () => { 
    
    test('should return default valiue', () =>{

        const { result } = renderHook(() => useCounter())

        const {counter, decrement, increment, reset} = result.current

        expect(counter).toBe(10)
        expect(decrement).toBeInstanceOf(Function)
        expect(decrement).toBeInstanceOf(Function)
        expect(reset).toBeInstanceOf(Function)
    })
    
    
    test('should generate counter with 100', () => {
        const {result} = renderHook(() => useCounter(100))

        
        expect( result.current.counter ).toBe(100)
    })
    
    test('should increment counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const {counter, increment} = result.current


        act( () => {
            increment()
            increment(2)
        })


        expect(result.current.counter).toBe(103)

    })


    test('should decrement counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const {decrement} = result.current


        act( () => {
            decrement()
            decrement(2)
        })


        expect(result.current.counter).toBe(97)

    })
    
    test('should reset counter', () => {

        const { result } = renderHook(() => useCounter(100))
        const { increment, reset} = result.current


        act( () => {
            increment()
            increment(2)
            reset()
        })


        expect(result.current.counter).toBe(100)

    })
    



})