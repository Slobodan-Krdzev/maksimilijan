export async function fetchData(endpoint: any) {
  const res = await fetch(`http://localhost:8000/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
