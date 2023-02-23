import React from "react";

class ErrorBoundary extends React.Component {
 

  render() {
    if (this.state.hasError) {
      return (
        <p id="error">
          
        </p>
      );
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
