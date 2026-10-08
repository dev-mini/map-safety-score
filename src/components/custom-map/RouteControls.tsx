import { useEffect } from 'react';
import { MapRoute, useMap } from '../ui/map';
import { getGeocodingInstance } from '@/lib/geocodingControl';

export const RouteControls = () => {
  const { map, isLoaded } = useMap();
  const route = [
    [-74.006, 40.7128], // NYC City Hall
    [-73.9857, 40.7484], // Empire State Building
    [-73.9772, 40.7527], // Grand Central
    [-73.9654, 40.7829], // Central Park
  ] as [number, number][];

  useEffect(() => {
    if (!map || !isLoaded) return;

    const gcOriginControl = getGeocodingInstance('Origin');
    const gcDestinationControl = getGeocodingInstance('Destination');

    map.addControl(gcOriginControl, 'top-left');
    map.addControl(gcDestinationControl, 'top-left');

    return () => {
      const removeDOMElement = () => {
        const container = map
          .getContainer()
          .querySelector('.maplibregl-ctrl-top-left');

        container?.querySelector('.maplibregl-ctrl-geocoder')?.remove();
      };
      if (gcOriginControl) {
        map.removeControl(gcOriginControl);
        removeDOMElement();
      }
      if (gcDestinationControl) {
        map.removeControl(gcDestinationControl);
        removeDOMElement();
      }
    };
  }, [map, isLoaded]);

  return (
    <>
      <MapRoute coordinates={route} color="#3b82f6" width={4} opacity={0.8} />
    </>
  );
};
