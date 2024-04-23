"use client";

import React from "react";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return (
    <div className="text-red-800 bg-purple-400">
      Error in reviewId: {error.message}
    </div>
  );
};

export default ErrorBoundary;
