export default function RootLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black p-6">
      <div className="rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-700 shadow-md dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <p className="text-xl font-semibold">Loading dashboard...</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Fetching the latest dashboard content.
        </p>
      </div>
    </div>
  );
}
