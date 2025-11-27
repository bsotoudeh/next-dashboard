import { colorMap, defaultColor } from "@/lib/colors";

export default function ColorBadge({ color }) {
  if (!color) return null;

  const classes = colorMap[color] || defaultColor;

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${classes}`}>
      {color}
    </span>
  );
}