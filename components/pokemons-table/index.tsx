'use client';

import React, { FC, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme

import { ColDef, GridOptions } from 'ag-grid-community';
import { PokemonsTableResponse } from '@/models/pokemons-table-response.model';
import TableActions from './table-actions';
import { useRouter } from 'next/navigation';

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  pokemonTableData: PokemonsTableResponse;
};

function PokemonsTable({ pokemonTableData }: Props) {
  const router = useRouter();

  const redirectToPokemonDetails = (pokemonName: string) => {
    router.push(`/pokemon-list/${pokemonName}`);
  };

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<Pokemon>[]>([
    { field: 'name' },
    {
      field: 'url',
      cellRenderer: TableActions,
      cellRendererParams: { redirectToPokemonDetails: (pokemonName: string) => redirectToPokemonDetails(pokemonName) },
    },
  ]);
  const [rowData, setRowData] = useState(pokemonTableData.results);

  const gridOptions: GridOptions = {
    autoSizeStrategy: {
      type: 'fitGridWidth',
    },
  };

  return (
    <div className="h-96">
      <div className={'ag-theme-quartz-dark'} style={{ width: '100%', height: '100%' }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} gridOptions={gridOptions} />
      </div>
    </div>
  );
}

export default PokemonsTable;
