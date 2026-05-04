import { useEffect } from 'react';
import { useMap } from '../ui/map';
import type { MapMouseEvent } from 'maplibre-gl';

const MapEventListener = () => {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const handleClick = (e: MapMouseEvent) => {
      console.log('Clicked at:', e.lngLat);
    };

    map.on('click', handleClick);
    return () => {
      map.off('click', handleClick);
    };
  }, [map, isLoaded]);

  return null;
};

export default MapEventListener;
