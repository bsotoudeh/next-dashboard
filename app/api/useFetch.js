export async function useFetch(path) {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

  const res = await fetch(`${baseUrl}${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch objects");
  }

  return res.json();
}