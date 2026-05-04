import {
  Map,
  // MapClusterLayer,
  MapControls,
  // MapRoute,
  // MapMarker,
  // MarkerContent,
  // MarkerTooltip,
} from '@/components/ui/map';
import { Card } from '@/components/ui/card';
import MapEventListener from '@/components/custom-map/MapEventListener';
// import { useState } from 'react';

// interface EarthquakeProperties {
//   mag: number;
//   place: string;
//   tsunami: number;
// }

// const route = [
//   [-74.006, 40.7128], // NYC City Hall
//   [-73.9857, 40.7484], // Empire State Building
//   [-73.9772, 40.7527], // Grand Central
//   [-73.9654, 40.7829], // Central Park
// ] as [number, number][];

// const stops = [
//   { name: 'City Hall', lng: -74.006, lat: 40.7128 },
//   { name: 'Empire State Building', lng: -73.9857, lat: 40.7484 },
//   { name: 'Grand Central Terminal', lng: -73.9772, lat: 40.7527 },
//   { name: 'Central Park', lng: -73.9654, lat: 40.7829 },
// ];

const MapOverviewBody = () => {
  // const [selectedPoint, setSelectedPoint] = useState<{
  //   coordinates: [number, number];
  //   properties: EarthquakeProperties;
  // } | null>(null);

  return (
    <Card className="h-[calc(100dvh-89px)] p-0 overflow-hidden mb-4">
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls position="top-right" showZoom showLocate />
        {/* <MapClusterLayer<EarthquakeProperties>
            data="https://maplibre.org/maplibre-gl-js/docs/assets/earthquakes.geojson"
            clusterRadius={50}
            clusterMaxZoom={14}
            clusterColors={['#1d8cf8', '#6d5dfc', '#e23670']}
            pointColor="#1d8cf8"
            onPointClick={(feature, coordinates) => {
              setSelectedPoint({
                coordinates,
                properties: feature.properties,
              });
            }}
          />
          <MapRoute
            coordinates={route}
            color="#3b82f6"
            width={4}
            opacity={0.8}
          />

          {stops.map((stop, index) => (
            <MapMarker key={stop.name} longitude={stop.lng} latitude={stop.lat}>
              <MarkerContent>
                <div className="flex size-4.5 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-xs font-semibold text-white shadow-lg">
                  {index + 1}
                </div>
              </MarkerContent>
              <MarkerTooltip>{stop.name}</MarkerTooltip>
            </MapMarker>
          ))} */}
        <MapEventListener />
      </Map>
    </Card>
  );
};

export default MapOverviewBody;
