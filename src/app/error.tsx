'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-light mb-4">Algo deu errado!</h2>
        <button
          onClick={() => reset()}
          className="bg-white text-black font-medium rounded-lg px-6 py-3 text-base hover:bg-gray-100 transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
