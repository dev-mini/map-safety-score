import type {
  iMapOverviewContextProviderProps,
  iPoint,
  MapMode,
} from '@/types/MapOverviewContextTypes';
import { MapOverviewContext } from './MapOverViewCreateContext';
import { useState } from 'react';

export const MapOverviewContextProvider = ({
  children,
}: iMapOverviewContextProviderProps) => {
  const [mode, setMode] = useState<MapMode>('report');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [point, setPoint] = useState<iPoint | null>(null);

  const handleChangeMode = (value: MapMode) => {
    setMode(value);
  };

  const handleChangeFormVisible = (value: boolean) => {
    setIsFormVisible(value);
  };

  const handleChangePoint = (value: iPoint | null) => {
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
