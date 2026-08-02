export async function useFetch(path) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
  const url = `${baseUrl}${path}`;

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch objects: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error("Fetch error detail:", err.cause ?? err);
    throw err;
  }
}
