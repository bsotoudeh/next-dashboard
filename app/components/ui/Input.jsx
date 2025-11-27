import { forwardRef } from "react";

const Input = forwardRef(({ label, className = "", error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        ref={ref}
        className={`
          border rounded-md px-3 py-2 bg-white dark:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500
          dark:border-gray-700
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
