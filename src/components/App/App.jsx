import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorBoundary } from '../ErrorBoundary';
import ErrorCard from '../ErrorCard';
import HeaderContainer from '../HeaderContainer';
import ResultsContainer from '../ResultsContainer';
import Footer from '../Footer';
import { getMovies } from '../../actions/movieActions';

const App = () => {
  const dispatch = useDispatch();

  const movieList = useSelector(state => state.data.movies);
  const [movieDescriptionId, setmovieDescriptionId] = useState(null);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <ErrorBoundary
      renderErrorCard={(error) => <ErrorCard error={error} />}>
      {
        movieList.length > 0 &&
        <>
          <HeaderContainer
            movieDetails={movieList.find(({ id }) => id === movieDescriptionId)}
            handleMovieDescription={setmovieDescriptionId}/>
          <ResultsContainer movies={movieList} handleMovieDescription={setmovieDescriptionId}/>
          <Footer />
        </>
      }
    </ErrorBoundary>)
}

export default App;
