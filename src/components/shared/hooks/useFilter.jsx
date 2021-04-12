import { useState, useCallback } from 'react';

export const useFilter = (filter, list) => {
	const [filterType, setFilter] = useState(filter);

	const filterList = useCallback(
    () => {
      return(
        filterType === 'all'
        ? list
        : list.filter(movie => movie.genre === filterType)
    )},
    [ list, filterType ]
  );

  const filteredList = filterList();

	return [filteredList, setFilter];
};

