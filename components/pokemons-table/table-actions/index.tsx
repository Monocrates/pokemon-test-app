'use client';

import { CustomCellRendererProps } from 'ag-grid-react';
import React from 'react';

interface TableActionsParams extends CustomCellRendererProps {
  redirectToPokemonDetails: (url: string) => void;
}

function TableActions({ redirectToPokemonDetails, data }: TableActionsParams) {
  return <button onClick={() => redirectToPokemonDetails(data?.name)}>More Details</button>;
}

export default TableActions;
