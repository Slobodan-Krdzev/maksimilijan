export async function fetchData() {
  const res = await fetch("http://localhost:8000/wines");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
