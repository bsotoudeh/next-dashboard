import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";

  return (
    <div className={`fixed top-5 right-5 p-4 rounded shadow-md ${bgColor} z-50`}>
      {message}
    </div>
  );
}
