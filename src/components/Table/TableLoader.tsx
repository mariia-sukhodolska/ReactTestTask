import React, { FC } from 'react';
import { TableCell, TableRow } from '@material-ui/core';

import styles from './Table.module.css';

interface Props {
  columnCount: number;
}

export const TableLoader: FC<Props> = ({ columnCount }: Props) => {
  const rows: JSX.Element[] = [];
  const cols: JSX.Element[] = [];

  for (let i = 0; i < columnCount; ++i) {
    cols.push(
      <TableCell key={i}>
        <div className={styles.loader} />
      </TableCell>
    );
  }

  for (let i = 0; i < 10; ++i) {
    rows.push(<TableRow key={i}>{cols}</TableRow>);
  }

  return <>{rows}</>;
};
