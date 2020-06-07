import React, { FC } from 'react';

import {
  TableContainer,
  Table as TableMui,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { TableHead } from './TableHead';
import { TableLoader } from './TableLoader';

interface Props {
  tableHeader: Record<string, any>[];
  data: TV.TVShow[];
  isLoaded: boolean;
  onSort: (value: TV.SortKey, direction: TV.SortDirection) => void;
  activeSortLabel: TV.SortKey | null;

  initialNameValue?: string;
}

export const Table: FC<Props> = ({
  initialNameValue = '',
  tableHeader,
  data,
  isLoaded,
  activeSortLabel,
  onSort
}: Props) => (
  <TableContainer>
    <TableMui>
      <TableHead
        tableHeader={tableHeader}
        activeSortLabel={activeSortLabel}
        initialNameValue={initialNameValue}
        onSort={onSort}
      />
      <TableBody>
        {!isLoaded ? (
          <TableLoader columnCount={Object.keys(tableHeader).length} />
        ) : (
          data.map((cell, index) => {
            return (
              <TableRow key={index}>
                {Object.keys(cell).map((elem, index) => (
                  <TableCell key={index}>{cell[elem]}</TableCell>
                ))}
              </TableRow>
            );
          })
        )}
      </TableBody>
    </TableMui>
  </TableContainer>
);
