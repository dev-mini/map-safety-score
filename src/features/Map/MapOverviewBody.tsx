import { Map, MapControls } from '@/components/ui/map';
import MapEventListener from '@/components/custom-map/MapEventListener';

const MapOverviewBody = () => {
  return (
    <Map
      center={[-101.19351477972177, 19.70235165290019]}
      zoom={4}
      className="h-300 p-0 overflow-hidden mb-4"
    >
      <MapControls position="top-right" showZoom showLocate />
      <MapEventListener />
    </Map>
  );
};

export default MapOverviewBody;
