import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <div className="max-w-xl text-center bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold mb-2">404</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Page not found.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          The route you requested does not exist or was removed.
        </p>
        <div className="flex justify-center">
          <Link
            href="/dashboard"
            className="inline-block px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
