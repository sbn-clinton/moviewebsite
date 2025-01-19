"use client";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-lg mb-6">
        {error.message || "An unexpected error occurred."}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
