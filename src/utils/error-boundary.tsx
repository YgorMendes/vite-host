import React from "react";

type MyComponentState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<any, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      console.log("cai aqui!");

      return <p>Erro ao carregar arquivo</p>;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
