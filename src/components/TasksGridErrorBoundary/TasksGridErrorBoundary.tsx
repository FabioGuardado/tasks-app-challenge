import { Component, ErrorInfo, ReactNode } from 'react';

import { Icon } from '@iconify/react';

import './TasksGridErrorBoundary.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string | undefined;
}

class TaskGridErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: undefined,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError, errorMessage } = this.state;
    if (hasError) {
      return (
        <div className="error-container">
          <h1 className="error-container__title">An error has occurred!</h1>
          <p className="error-container__description">{errorMessage}</p>
          <Icon icon="carbon:data-error" height={90} />
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}

export default TaskGridErrorBoundary;
