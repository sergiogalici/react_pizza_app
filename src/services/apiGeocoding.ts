export async function getAddress({
  latitude,
  longitude,
}: {
  latitude: number
  longitude: number
}): Promise<{
  locality: string
  city: string
  postcode: string
  countryName: string
}> {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`,
  )
  if (!res.ok) throw Error('Failed getting address')

  const data = await res.json()
  return data
}
