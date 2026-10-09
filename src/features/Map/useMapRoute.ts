import { getMapRoute } from '@/api/mapRoute';
import { MAP_ROUTE_WITHOUT_AUTH } from '@/constants';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export const useMapRoute = () => {
  const { isAuthenticated } = useAuth0();
  const [originPoint, setOriginPoint] = useState<[number, number] | null>(null);
  const [destinationPoint, setDestinationPoint] = useState<
    [number, number] | null
  >(null);
  const [route, setRoute] = useState<[number, number][] | []>([]);

  const handleChangeOriginPoint = (value: [number, number]) => {
    setOriginPoint(value);
  };

  const handleChangeDestinationPoint = (value: [number, number]) => {
    setDestinationPoint(value);
  };

  const getRoute = async () => {
    if (!originPoint || !destinationPoint) return;

    const [originLongitude, originLatitude] = originPoint;
    const [destinationLongitude, destinationLatitude] = destinationPoint;
    const coordinates = [
      `${originLongitude},${originLatitude}`,
      `${destinationLongitude},${destinationLatitude}`,
    ].join(';');

    try {
      const routeCoordinates = await getMapRoute(coordinates);
      if (!routeCoordinates)
        throw new Error(
          'Error while getting the route between your selected points'
        );

      setRoute(routeCoordinates);
    } catch (error) {
      const newError = error as Error;
      console.error(newError);
      toast.error(newError?.message);
      setRoute([]);
    }
  };

  useEffect(() => {
    if (!originPoint || !destinationPoint) return;

    if (!isAuthenticated) {
      toast.error(MAP_ROUTE_WITHOUT_AUTH);
      return;
    }

    getRoute();

    return () => {
      setRoute([]);
      setOriginPoint(null);
      setDestinationPoint(null);
    };
  }, [originPoint, destinationPoint, isAuthenticated]);

  return {
    route,
    originPoint,
    destinationPoint,
    handleChangeOriginPoint,
    handleChangeDestinationPoint,
    getRoute,
  };
};
