import { useEffect, useRef } from 'react';
import { useMap } from '../ui/map';
import { getGeocodingInstance } from '@/lib/geocodingControl';
import MapEventListener from './MapEventListener';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import { useAuth0 } from '@auth0/auth0-react';
import MapPointForm from '@/features/Map/MapPointForm';

export const ReportControls = () => {
  const { map, isLoaded } = useMap();
  const { isAuthenticated } = useAuth0();
  const { isFormVisible } = useMapOverviewContext();
  const pointClickedRef = useRef(false);

  useEffect(() => {
    if (!map || !isLoaded) return;

    const gcLocationControl = getGeocodingInstance('Search location...');

    map.addControl(gcLocationControl, 'top-left');

    return () => {
      if (gcLocationControl) {
        map.removeControl(gcLocationControl);
        const container = map
          .getContainer()
          .querySelector('.maplibregl-ctrl-top-left');

        container?.querySelector('.maplibregl-ctrl-geocoder')?.remove();
      }
    };
  }, [map, isLoaded]);

  return (
    <>
      <MapEventListener pointClickedRef={pointClickedRef} />
      {isAuthenticated && isFormVisible && <MapPointForm />}
    </>
  );
};
