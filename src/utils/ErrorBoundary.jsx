import React from 'react';

// Simple ErrorBoundary to catch any issues in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an external error reporting service if needed
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI if error occurs
      return <h1>Something went wrong. Try reloading the page.</h1>;
    }

    // If no error, render children as usual
    return this.props.children;
  }
}

export default ErrorBoundary;
