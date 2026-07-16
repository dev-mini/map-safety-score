import { MapOverviewContextProvider } from '@/context/MapOverviewContext';
import MapOverviewHeader from '@/features/Map/MapOverviewHeader';
import MapOverviewBody from '@/features/Map/MapOverviewBody';

const MapOverview = () => {
  return (
    <MapOverviewContextProvider>
      <div className="flex flex-col h-full gap-8">
        <MapOverviewHeader />
        <MapOverviewBody />
      </div>
    </MapOverviewContextProvider>
  );
};

export default MapOverview;
