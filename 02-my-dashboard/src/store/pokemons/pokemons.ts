import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: {[key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//     const favorites = JSON.parse(localStorage.getItem('favoritePokemons') ?? '{}')
//     return favorites
// }

const initialState: PokemonsState = {
    favorites: {}
    // ...getInitialState()
    // '1': { id: '1', name: 'bulbasaur' },
    // '2': { id: '3', name: 'venusaur' },
    // '3': { id: '5', name: 'charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{[key: string]: SimplePokemon}>) {
        state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        const pokemon = action.payload
        const { id } = pokemon

        if( !!state.favorites[id] ) {
            delete state.favorites[id]
            return
        } else {
            state.favorites[id] = pokemon
        }

        // TODO: no se debe de hacer en redux
        localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites))

    }

  }
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer