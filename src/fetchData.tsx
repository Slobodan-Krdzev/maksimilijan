export async function fetchData(endpoint: any) {
  const res = await fetch(
    `https://maksimilijan-wine--room.glitch.me/${endpoint}`,
    { next: { revalidate: 500000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
