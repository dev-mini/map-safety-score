import {
  Map,
  MapClusterLayer,
  MapControls,
  MapPopup,
} from '@/components/ui/map';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import type { Incident } from '@/api/incidents/incidentTypes';
import { useRef, useState } from 'react';
import { ReportControls } from '@/components/custom-map/ReportControls';
import { RouteControls } from '@/components/custom-map/RouteControls';

const MapOverviewBody = () => {
  const { incidentsRes, mode } = useMapOverviewContext();
  const [selectedPoint, setSelectedPoint] = useState<Incident | null>(null);
  const pointClickedRef = useRef(false);

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
        onClusterClick={() => {
          pointClickedRef.current = true;
        }}
        onPointClick={(feature, coordinates) => {
          pointClickedRef.current = true;
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
          className="w-64"
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
      {mode === 'report' && <ReportControls />}
      {mode === 'route' && <RouteControls />}
    </Map>
  );
};

export default MapOverviewBody;
