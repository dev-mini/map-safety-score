import { useEffect } from 'react';
import { MapRoute, useMap } from '../ui/map';
import { getGeocodingInstance } from '@/lib/geocodingControl';
import type { PickEvent } from '@maptiler/geocoding-control/maplibregl';
import { useMapRoute } from '@/features/Map/useMapRoute';

export const RouteControls = () => {
  const { map, isLoaded } = useMap();
  const {
    route,
    handleChangeOriginPoint,
    handleChangeDestinationPoint,
    getRoute,
  } = useMapRoute();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const gcOriginControl = getGeocodingInstance('Origin');
    const gcDestinationControl = getGeocodingInstance('Destination');

    map.addControl(gcOriginControl, 'top-left');
    map.addControl(gcDestinationControl, 'top-left');

    const getCoordinatesFromPick = (e: PickEvent) => {
      return Array.isArray(e.feature?.geometry?.coordinates[0])
        ? e.feature?.center
        : e.feature?.geometry?.coordinates;
    };

    gcOriginControl.on('pick', e => {
      const origin = getCoordinatesFromPick(e);
      handleChangeOriginPoint(origin);
    });

    gcDestinationControl.on('pick', e => {
      const destination = getCoordinatesFromPick(e);
      handleChangeDestinationPoint(destination);
      getRoute();
    });

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
