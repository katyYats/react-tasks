import React from 'react';

import { ErrorBoundary } from '../ErrorBoundary';
import ErrorCard from '../ErrorCard';
import HeaderContainer from '../HeaderContainer';
import ResultsContainer from '../ResultsContainer';
import Footer from '../Footer';
import Modal from '../Modals/Modal';
import MovieModal from '../Modals/MovieModal';
import movies from '../../static/moviesData';

const initialMovieState = {
  movieId: '',
  title: '',
  date: '2021-04-04',
  movieUrl: '',
  genreList: [
    {
      value: 'Select genre',
    },
    {
      value: 'comedy',
      selected: false,
    },
    {
      value: 'drama',
      selected: false,
    },
    {
      value: 'fantasy',
      selected: false,
    },
  ],
  overview: '',
  runtime: ''
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movieList: movies,
      activeModal: null,
      movieDescriptionId: null
    };

    this.setActiveModal = this.setActiveModal.bind(this);
    this.resetActiveModal = this.resetActiveModal.bind(this);
    this.handleMovieDescription = this.handleMovieDescription.bind(this);
  }

  setActiveModal(type) {
    this.setState({activeModal: type});
  }

  resetActiveModal() {
    this.setState({activeModal: null});
  }

  handleAddMovieModal(movie) {
    this.setState((state) => {
      return {...state, movieList: {...state.movielist, movie}};
    })
  }

  handleDeleteMovie() {
    this.setState((state) => {
      return {...state, movieList: state.movielist.filter(movie => movie.id !== id)};
    });
  }

  handleMovieDescription(id) {
    this.setState({movieDescriptionId: id});
  }

  render() {
    const { activeModal, movieDescriptionId } = this.state;

    return (
      <ErrorBoundary
        renderErrorCard={(error) => <ErrorCard error={error} />}>
        <HeaderContainer
          movieDetails={this.state.movieList.find(({ id }) => id === movieDescriptionId)}
          setActiveModal={this.setActiveModal}
          handleMovieDescription={this.handleMovieDescription}/>
        <ResultsContainer movies={this.state.movieList} handleMovieDescription={this.handleMovieDescription}/>
        {
          activeModal === 'add' &&
          <Modal
            header='Add movie'
            onClose={this.resetActiveModal}>
            <MovieModal
              {...initialMovieState}
              onSave={(movie) => handleAddMovieModal(movie)}/>
          </Modal>
        }
        <Footer />
      </ErrorBoundary>)
  }
}

export default App;
