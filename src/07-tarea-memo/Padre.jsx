import React from 'react'
import { Hijo } from './Hijo'
import { useState, useCallback, useMemo } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
            setValor( value => value + num )
        },
        [],
    )

    // const showArray = useMemo(() => numeros.map( n => (
    //     <Hijo 
    //         key={ n }
    //         numero={ n }
    //         incrementar={ incrementar }
    //     />
    // )) , [numeros]) No es nacesario usar, en todo caso, solo iteramos 1 vez para mostrar la lista, luego
    //lo que se actualiza simplemente es la incrementeacion que vuelve a generar el compoent y como no se actualiza 
    //simplemente memorizamos el componente
    
    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />))
            }

            {/* <Hijo /> */}
        </div>
    )
}
