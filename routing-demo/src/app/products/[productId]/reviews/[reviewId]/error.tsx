"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <span>Error in reviewId: {error.message}</span>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorBoundary;
