import { useEffect } from 'react';
import { useMap } from '../ui/map';
import type { MapMouseEvent } from 'maplibre-gl';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import {
  CLICK_MAP_REPORT_WITHOUT_AUTH,
  CLICK_MAP_ROUTE_WITHOUT_AUTH,
} from '@/constants';

const MapEventListener = () => {
  const { map, isLoaded } = useMap();
  const { isAuthenticated } = useAuth0();
  const { mode } = useMapOverviewContext();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const handleOffClick = () => {
      map.off('click', handleClick);
    };

    const handleClick = (e: MapMouseEvent) => {
      if (!isAuthenticated) {
        toast.error(
          mode === 'report'
            ? CLICK_MAP_REPORT_WITHOUT_AUTH
            : CLICK_MAP_ROUTE_WITHOUT_AUTH
        );
        return handleOffClick;
      }

      //DETERMINE SELECTED POINT NAME
      const features = map.queryRenderedFeatures(e.point);
      if (features.length > 0) {
        const clickedFeature = features[0];
        // Access the name property (assuming 'name' exists in your data)
        console.log(
          'Clicked feature name:',
          clickedFeature.properties.name ?? clickedFeature.properties.class
        );
      }
      console.log(e);
      console.log('Clicked at:', e.lngLat);
    };

    map.on('click', handleClick);

    return handleOffClick;
  }, [map, isLoaded]);

  return null;
};

export default MapEventListener;
