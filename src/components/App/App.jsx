import React from 'react';

import { ErrorBoundary } from '../ErrorBoundary';
import ErrorCard from '../ErrorCard';
import HeaderContainer from '../HeaderContainer';
import ResultsContainer from '../ResultsContainer';
import Footer from '../Footer';

const App = () => (
  <ErrorBoundary
    renderErrorCard={(error) => <ErrorCard error={error} />}>
    <HeaderContainer />
    <ResultsContainer />
    <Footer />
  </ErrorBoundary>);

export default App;
