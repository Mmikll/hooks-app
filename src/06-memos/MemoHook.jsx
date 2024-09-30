import { useCounter } from "../hooks/useCounter"
import { useState } from "react"
import { useMemo } from "react"


const heavyStuff = (iterationNumber = 100) =>{
  
    for(let i = 0; i < iterationNumber; i++){
      console.log('here we go...')
    }

    return `iteration numbers done: ${iterationNumber}`
}


export const MemoHook = () => {

    const {counter, increment} = useCounter(100)

    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>

        <hr />

        <h4>{heavyStuff(memorizeValue)}</h4>

        <button className="btn btn-primary"
        onClick={() => increment()}>
            +1
        </button>

        <button 
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}>
            show/hide: {JSON.stringify(show)}
        </button>

    </>
  )
}

