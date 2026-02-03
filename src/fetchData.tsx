export async function fetchData(endpoint: string) {
  const res = await fetch("/db.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch local db.json");

  const db = await res.json();

  // endpoint: "wines", "images", "smestuvanje", "awards"
  return db[endpoint];
}
