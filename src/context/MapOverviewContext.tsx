import type {
  iMapOverviewContextProviderProps,
  MapMode,
} from '@/types/MapOverviewContextTypes';
import { MapOverviewContext } from './MapOverViewCreateContext';
import { useState } from 'react';
import type { Coordinates } from '@/types/MapOverviewTypes';

export const MapOverviewContextProvider = ({
  children,
}: iMapOverviewContextProviderProps) => {
  const [mode, setMode] = useState<MapMode>('report');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [point, setPoint] = useState<Coordinates | null>(null);

  const handleChangeMode = (value: MapMode) => {
    setMode(value);
  };

  const handleChangeFormVisible = (value: boolean) => {
    if (value === false) handleChangePoint(null);
    setIsFormVisible(value);
  };

  const handleChangePoint = (value: Coordinates | null) => {
    setPoint(value);
  };

  return (
    <MapOverviewContext
      value={{
        mode,
        isFormVisible,
        handleChangeMode,
        handleChangeFormVisible,
        handleChangePoint,
        point,
      }}
    >
      {children}
    </MapOverviewContext>
  );
};
