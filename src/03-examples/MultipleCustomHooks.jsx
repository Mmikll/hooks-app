import { useFetch, useCounter} from "../hooks"
import { LoadigMessage } from "./LoadigMessage"
import { PokemonCard } from "./PokemonCard"
export const MultipleCustomHooks = () => {

  const {counter, decrement, increment} = useCounter(1)
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`
  const { data, isLoading, hasError } =  useFetch(url)

  return (
    <>
    
      <h1>Informacion de Pokemon</h1>

      {
      isLoading 
      ? <LoadigMessage/>
      : (
      <PokemonCard 
      id = {data.id} 
      name = {data.name} 
      sprites={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
      ]}/>
    )
    }

      <h2>{data?.name}</h2>

      <button className="btn btn-primary mt-2" onClick={() => counter > 1 ? decrement() : null}>Before</button>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>After</button>

    </>
  )
}

