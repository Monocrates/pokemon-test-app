'use client';

import React, { FC } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const imageLoader = () => {
  return 
}

const PokemonImage: FC<Props> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default PokemonImage;
