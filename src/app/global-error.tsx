'use client';

import { useEffect } from 'react';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen p-12 bg-gray-50">
          <div className="text-center max-w-md">
            <h1 className="text-9xl font-extrabold text-red-600 m-0 leading-none">
              500
            </h1>
            <h2 className="text-3xl font-semibold text-gray-900 my-6">
              Something went wrong
            </h2>
            <p className="text-base text-gray-600 mb-8 leading-relaxed">
              An unexpected error occurred while running the interactive demo.
              Our team has been notified.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={reset}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white border-none rounded-md font-medium cursor-pointer transition-colors hover:bg-red-700"
              >
                Try Again
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="inline-flex items-center px-6 py-3 bg-transparent text-red-600 border border-red-600 rounded-md font-medium cursor-pointer transition-all hover:bg-red-600 hover:text-white"
              >
                Back to Demorix
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left bg-gray-50 border border-gray-300 rounded-md p-4">
                <summary className="cursor-pointer font-medium mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="bg-gray-200 p-3 rounded text-sm overflow-x-auto">
                  {error.message}
                </pre>
                {error.digest && <p>Digest: {error.digest}</p>}
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
