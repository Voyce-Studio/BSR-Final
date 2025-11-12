import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('App error boundary caught', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Something went sideways.</h1>
          <p>Please refresh to continue floating with Bliss Sound Records.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
