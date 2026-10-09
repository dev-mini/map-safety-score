const ROUTING_API_URL = import.meta.env.VITE_ROUTING_API_URL;

export const getMapRoute = async (
  coordinates: string
): Promise<[number, number][] | []> => {
  const url = `${ROUTING_API_URL}${coordinates}?overview=full&geometries=geojson`;
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error('Failed to calculate route');

    const data = await response.json();

    if (data.code !== 'Ok' || !data.routes?.length)
      throw new Error('No route found');

    return data.routes[0].geometry.coordinates;
  } catch (error) {
    console.error(error);
    return [];
  }
};
