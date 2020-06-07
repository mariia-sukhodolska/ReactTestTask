import React, { FC } from 'react';
import {
  makeStyles,
  TableCell,
  TableHead as TableHeadMui,
  TableRow
} from '@material-ui/core';

import { Search } from '../Filters/Search/Search';
import { SortIcon } from '../Filters/Sort/Sort';
import styles from './Table.module.css';

interface Props {
  tableHeader: Record<string, any>;
  onSort: (value: TV.SortKey, direction: TV.SortDirection) => void;
  activeSortLabel: TV.SortKey | null;

  initialNameValue?: string;
}

export const TableHead: FC<Props> = ({
  tableHeader,
  onSort,
  activeSortLabel,
  initialNameValue = ''
}: Props) => {
  const useStyles = makeStyles({
    tableHeadCell: {
      fontWeight: 700,
      '&:first-of-type': {
        width: '30%'
      },
      '&:last-of-type': {
        width: '10%'
      }
    }
  });
  const classes = useStyles();

  return (
    <TableHeadMui>
      <TableRow>
        {tableHeader.map(({ name, filter, sortKey }) => (
          <TableCell
            key={name}
            variant={'head'}
            classes={{ root: classes.tableHeadCell }}
          >
            <div className={styles.headerCell}>
              {name}
              {sortKey && (
                <SortIcon
                  sortKey={sortKey}
                  activeSortLabel={activeSortLabel}
                  onSort={onSort}
                />
              )}
              {filter && filter.name === 'search' && filter.queryString && (
                <Search
                  queryString={filter.queryString}
                  initialValue={initialNameValue}
                />
              )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};
