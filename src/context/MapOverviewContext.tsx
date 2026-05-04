import type {
  iMapOverviewContextProviderProps,
  MapMode,
} from '@/types/MapOverviewContextTypes';
import { MapOverviewContext } from './MapOverViewCreateContext';
import { useState } from 'react';

export const MapOverviewContextProvider = ({
  children,
}: iMapOverviewContextProviderProps) => {
  const [mode, setMode] = useState<MapMode>('report');

  return (
    <MapOverviewContext
      value={{
        mode,
      }}
    >
      {children}
    </MapOverviewContext>
  );
};
