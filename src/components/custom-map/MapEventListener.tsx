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
import type { iMapListenerProps } from '@/types/MapOverviewTypes';

const MapEventListener = ({ pointClickedRef }: iMapListenerProps) => {
  const { map, isLoaded } = useMap();
  const { isAuthenticated } = useAuth0();
  const { mode, handleChangeFormVisible, handleChangePoint } =
    useMapOverviewContext();

  useEffect(() => {
    if (!map || !isLoaded) return;

    const handleClick = (e: MapMouseEvent) => {
      if (pointClickedRef.current) {
        pointClickedRef.current = false; // reset para el próximo click
        return;
      }

      if (!isAuthenticated) {
        toast.error(
          mode === 'report'
            ? CLICK_MAP_REPORT_WITHOUT_AUTH
            : CLICK_MAP_ROUTE_WITHOUT_AUTH
        );
        return;
      }

      handleChangePoint({ longitude: e.lngLat.lng, latitude: e.lngLat.lat });
      handleChangeFormVisible(true);
    };

    map.on('click', handleClick);
    return () => {
      map.off('click', handleClick);
    };
  }, [map, isLoaded, isAuthenticated]);

  return null;
};

export default MapEventListener;
