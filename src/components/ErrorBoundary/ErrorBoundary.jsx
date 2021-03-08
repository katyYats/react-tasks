import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { children, renderErrorCard } = this.props;
    const { error } = this.state;

    if (error) {
      return renderErrorCard(error);
    }

    return children;
  }
}
