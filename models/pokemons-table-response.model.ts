import { PokemonTable } from './pokemon-table.model';

export type PokemonsTableResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonTable[];
};
