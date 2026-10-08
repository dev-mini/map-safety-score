import { GeocodingControl } from '@maptiler/geocoding-control/maplibregl';

const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

export const getGeocodingInstance = (placeholder: string) =>
  new GeocodingControl({
    apiKey: API_KEY,
    limit: 6,
    placeholder: placeholder,
    debounceSearch: 300,
  });
