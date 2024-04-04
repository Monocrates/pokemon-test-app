import React, { Suspense } from 'react';

import { getPokemons, getAllPokemonsInfo } from '@/lib/pokemon-utils';
import { Grid } from '@radix-ui/themes';
import PokemonCard from '@/components/pokemon-card/PokemonCard';

const PokemonsGrid = async () => {
  const pokemonData = await getPokemons();
  const allPokemonsInfo = await getAllPokemonsInfo(pokemonData.results);

  return (
    <Grid
      columns="repeat(auto-fit, minmax(150px, 1fr))"
      gap="3"
      rows="1fr"
      width={'100%'}
      style={{ placeItems: 'center' }}
    >
      {allPokemonsInfo.map((pokemon, index) => (
        <PokemonCard key={index} pokemonData={pokemon} />
      ))}
    </Grid>
  );
};

async function PokemonList() {
  return (
    <section>
      <h2 className="my-5">Pokemons Table</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <PokemonsGrid />
      </Suspense>
    </section>
  );
}

export default PokemonList;
