// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        404 – Page Not Found
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full
                   bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold
                   shadow-md hover:scale-105 transition-transform"
      >
        Go back home
      </Link>
    </main>
  );
}
