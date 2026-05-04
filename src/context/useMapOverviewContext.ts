import { useContext } from 'react';
import { MapOverviewContext } from './MapOverViewCreateContext';

export const useMapOverviewContext = () => {
  return useContext(MapOverviewContext);
};
