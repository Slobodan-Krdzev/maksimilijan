export async function fetchData(endpoint: any) {
  const res = await fetch(
    `https://maksimilijan-wine--room.glitch.me/${endpoint}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
