import { Map, MapClusterLayer, MapControls } from '@/components/ui/map';
import MapEventListener from '@/components/custom-map/MapEventListener';
import MapPointForm from './MapPointForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';

const MapOverviewBody = () => {
  const { isAuthenticated } = useAuth0();
  const { isFormVisible, incidentsRes } = useMapOverviewContext();

  return (
    <Map
      center={[-101.19351477972177, 19.70235165290019]}
      zoom={4}
      className="h-300 p-0 overflow-hidden mb-4"
    >
      <MapClusterLayer
        data={incidentsRes}
        clusterRadius={50}
        clusterMaxZoom={14}
      />

      <MapControls position="top-right" showZoom showLocate />
      <MapEventListener />
      {isAuthenticated && isFormVisible && <MapPointForm />}
    </Map>
  );
};

export default MapOverviewBody;
