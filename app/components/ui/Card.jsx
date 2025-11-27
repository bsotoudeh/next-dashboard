export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        border rounded-xl shadow-sm p-4 bg-white dark:bg-gray-900 dark:border-gray-700
        ${className}
      `}
    >
      {children}
    </div>
  );
}
