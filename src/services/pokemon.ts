import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Pokemon extends Record<string, any> {}

// base api constructor
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
})

// split endpoints out would go in a different file
const getPokemonByName = pokemonApi.injectEndpoints({
  endpoints: (build) => ({
    getPokemonByName: build.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
  overrideExisting: false,
})

export const { useGetPokemonByNameQuery } = getPokemonByName
