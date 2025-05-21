import { PokemonGrid, PokemonReponse, SimplePokemon } from "@/pokemons"

const getPokemons = async(limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then( res => res.json() )

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }) )

  return pokemons
}

export default async function PokemonPage() {

  const pokemons = await getPokemons(151)

  // throw new Error('Esto es algo que no deberia suceder')
  // throw notFound()

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-5">Listado de Pokemons <small>estatico</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  )
}