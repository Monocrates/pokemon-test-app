import { PokemonsTableResponse } from '@/models/pokemons-table-response.model';

export const getPokemons = async (pageLimit = 6): Promise<PokemonsTableResponse> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pageLimit}`);
  const data: PokemonsTableResponse = await response.json();

  return data;
};

export const getPokemonData = async (pokemonName: string) => {
  const pokemonDataResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonData = await pokemonDataResponse.json();

  return pokemonData;
};
