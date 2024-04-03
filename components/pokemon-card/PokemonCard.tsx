import { Box, Card, Inset, Strong, Text } from '@radix-ui/themes';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
  pokemonData: any;
};

const PokemonCard: FC<Props> = ({ pokemonData }) => {

  return (
    <Box maxWidth="260px" height="100%">
      <Card size="2">
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src={pokemonData.sprites.other['official-artwork'].front_shiny}
            alt={pokemonData?.name}
            width={400}
            height={400}
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
  );
};

export default PokemonCard;
