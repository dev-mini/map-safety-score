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
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChangeMode = (value: MapMode) => {
    setMode(value);
  };

  const handleChangeFormVisible = (value: boolean) => {
    setIsFormVisible(value);
  };

  return (
    <MapOverviewContext
      value={{
        mode,
        isFormVisible,
        handleChangeMode,
        handleChangeFormVisible,
      }}
    >
      {children}
    </MapOverviewContext>
  );
};
