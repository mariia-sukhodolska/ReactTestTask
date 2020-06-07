import React, { FC, useState } from 'react';
import { makeStyles, TableSortLabel } from '@material-ui/core';

interface Props {
  activeSortLabel: TV.SortKey | null;
  onSort: (value: TV.SortKey, direction: TV.SortDirection) => void;
  sortKey: TV.SortKey;
}

export const SortIcon: FC<Props> = ({
  activeSortLabel,
  onSort,
  sortKey
}: Props) => {
  const useStyles = makeStyles({
    root: {
      marginLeft: '8px',
      '& .MuiTableSortLabel-icon': {
        opacity: '0.2'
      }
    },
    active: {
      backgroundColor: 'rgba(0,0,255,0.3)'
    }
  });
  const classes = useStyles();
  const [directionState, setDirectionState] = useState<TV.SortDirection>(
    'desc'
  );
  const handleClick = () => {
    const newDirection = directionState === 'asc' ? 'desc' : 'asc';
    setDirectionState(newDirection);
    onSort(sortKey, newDirection);
  };

  return (
    <TableSortLabel
      direction={directionState}
      classes={{ root: classes.root, active: classes.active }}
      active={sortKey === activeSortLabel}
      onClick={handleClick}
    />
  );
};
