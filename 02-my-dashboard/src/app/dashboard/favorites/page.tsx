import { Favorites } from "@/favorites"

export const metadata = {
    title: 'Favoritos',
    description: 'Esto es una descripcion'
}

export default async function PokemonPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-5">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      <Favorites />
    </div>
  )
}