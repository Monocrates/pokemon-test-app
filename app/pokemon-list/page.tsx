import React from 'react';

import PokemonsTable from '@/components/pokemons-table';
import { getPokemonData, getPokemons } from '@/lib/pokemon-utils';
import { Grid } from '@radix-ui/themes';
import PokemonCard from '@/components/pokemon-card/PokemonCard';
import { PokemonTable } from '@/models/pokemon-table.model';

const getAllPokemonsInfo = async (pokemonData: PokemonTable[]) => {
  const pokemonsInfo = Promise.all(
    pokemonData.map(async (pokemon): Promise<any> => await getPokemonData(pokemon.name))
  );

  return pokemonsInfo;
};

async function PokemonList() {
  const pokemonData = await getPokemons();
  const allPokemonsInfo = await getAllPokemonsInfo(pokemonData.results);

  return (
    <section>
      <h2 className="my-5">Pokemons Table</h2>
      {/* <PokemonsTable pokemonTableData={pokemonData} /> */}
      <Grid
        columns="repeat(auto-fit, minmax(150px, 1fr))"
        gap="3"
        rows="repeat(2, 350px)"
        width={{ md: '80%' }}
        style={{ placeItems: 'center' }}
      >
        {allPokemonsInfo.map((pokemon, index) => (
          <PokemonCard key={index} pokemonData={pokemon} />
        ))}
      </Grid>
    </section>
  );
}

export default PokemonList;
