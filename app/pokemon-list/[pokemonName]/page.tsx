import { getPokemonData } from '@/lib/pokemon-utils';
import Image from 'next/image';
import React, { FC } from 'react';

import { Box, Card, Grid, Inset, Strong, Text } from '@radix-ui/themes';

type Props = {
  params: {
    pokemonName: string;
  };
};

const PokemonDetail: FC<Props> = async ({ params }) => {
  const pokemonData = await getPokemonData(params.pokemonName);

  return (
    <Grid style={{ placeItems: 'center' }}>
      <Box maxWidth="240px">
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <Image
              className="basis-1"
              src={pokemonData.sprites.other['official-artwork'].front_shiny}
              alt={pokemonData?.name}
              priority={true}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Pokemon Name: </Strong> {pokemonData?.name}.
          </Text>
          <Text as="p" size="3">
            <Strong>Base Experience: </Strong> {pokemonData?.base_experience}.
          </Text>
        </Card>
      </Box>
    </Grid>
  );
};

export default PokemonDetail;
