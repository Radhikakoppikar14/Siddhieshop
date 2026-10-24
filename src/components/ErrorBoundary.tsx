import React from 'react';

interface Props {
  children: React.ReactNode;
  /** Changing this value (e.g. the route path) clears a previous error. */
  resetKey?: string;
}
interface State {
  error: Error | null;
}

/**
 * Catches any render error inside a page so the visitor never sees a blank
 * white screen. Shows a friendly message with a reload button instead, and
 * logs the real error to the browser console for debugging.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Page crashed:', error, info.componentStack);
  }

  componentDidUpdate(prev: Props) {
    if (this.state.error && prev.resetKey !== this.props.resetKey) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-[#FFFAF6] text-[#231815]">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-semibold font-editorial">Something went wrong on this page</h2>
          <p className="mt-3 text-sm text-[#5F524C]">
            Please reload the page. If it keeps happening, call us on 096200 00947.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFAF6] bg-[#D2430F] hover:bg-[#A8340A] rounded-xl cursor-pointer"
            >
              Reload page
            </button>
            <a
              href="/"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#231815] border border-[#F1D9CA] bg-white rounded-xl"
            >
              Go to home
            </a>
          </div>
        </div>
      </div>
    );
  }
}
