import {
  Map,
  MapClusterLayer,
  MapControls,
  MapPopup,
} from '@/components/ui/map';
import MapEventListener from '@/components/custom-map/MapEventListener';
import MapPointForm from './MapPointForm';
import { useAuth0 } from '@auth0/auth0-react';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import type { Incident } from '@/api/incidents/incidentTypes';
import { useState } from 'react';

const MapOverviewBody = () => {
  const { isAuthenticated } = useAuth0();
  const { isFormVisible, incidentsRes } = useMapOverviewContext();
  const [selectedPoint, setSelectedPoint] = useState<Incident | null>(null);

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
        onPointClick={(feature, coordinates) => {
          setSelectedPoint({
            ...feature?.properties,
            location: {
              longitude: coordinates[0],
              latitude: coordinates[1],
            },
          });
        }}
      />
      {selectedPoint && (
        <MapPopup
          key={`${selectedPoint?.location?.longitude}-${selectedPoint?.location?.latitude}`}
          longitude={selectedPoint?.location?.longitude}
          latitude={selectedPoint?.location?.latitude}
          onClose={() => setSelectedPoint(null)}
          closeOnClick={false}
          focusAfterOpen={false}
          closeButton
          className="w-34"
        >
          <div className="text-[13px]">
            <p className="text-muted-foreground">
              User:{' '}
              <span className="text-foreground font-medium">
                {selectedPoint.auth0User}
              </span>
            </p>
            <p className="text-muted-foreground">
              Description:{' '}
              <span className="text-foreground">
                {selectedPoint.description}
              </span>
            </p>
          </div>
        </MapPopup>
      )}

      <MapControls position="top-right" showZoom showLocate />
      <MapEventListener isCurrentPointClicked={!!selectedPoint} />
      {isAuthenticated && isFormVisible && <MapPointForm />}
    </Map>
  );
};

export default MapOverviewBody;
