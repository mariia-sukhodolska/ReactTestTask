import React, { FC, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Input, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { loadTVShows } from '../../../store/tvShows/tvShows.actions';
import styles from './Search.module.css';

interface Props {
  queryString: string;
  initialValue?: string;
}

export const Search: FC<Props> = ({
  queryString,
  initialValue = ''
}: Props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(initialValue);
  const handleInputChange = (
    event: SyntheticEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.currentTarget.value);
  };
  const handleSearchClick = () => {
    dispatch(loadTVShows(inputValue, queryString));
  };

  const useStyles = makeStyles({
    input: {
      width: '120px',
      fontSize: '14px'
    }
  });
  const classes = useStyles();

  return (
    <div className={styles.search}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        classes={{ root: classes.input }}
      />
      <IconButton size={'small'} onClick={handleSearchClick}>
        <SearchIcon fontSize={'small'} />
      </IconButton>
    </div>
  );
};
