import type {
  iMapOverviewContextProviderProps,
  MapMode,
} from '@/types/MapOverviewContextTypes';
import { MapOverviewContext } from './MapOverViewCreateContext';
import { use, useState } from 'react';
import type {
  Coordinates,
  iMapOverviewFilters,
} from '@/types/MapOverviewTypes';
import { apiClient } from '@/api/apiClient';
import type { iCategoryReqData } from '@/api/categories/categoryTypes';
import { getCategories } from '@/api/categories/categories';
import type { iIncidentReqData } from '@/api/incidents/incidentTypes';
import { getIncidents } from '@/api/incidents/incidents';

const INITIAL_FILTERS: iMapOverviewFilters = {
  incidentType: '',
};

export const MapOverviewContextProvider = ({
  children,
}: iMapOverviewContextProviderProps) => {
  const [mode, setMode] = useState<MapMode>('report');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [point, setPoint] = useState<Coordinates | null>(null);
  const [filters, setFilters] = useState<iMapOverviewFilters>(INITIAL_FILTERS);
  const { categories } = use<iCategoryReqData>(
    apiClient('/categories', getCategories)
  );
  const { incidents } = use<iIncidentReqData>(
    apiClient('/incidents', getIncidents)
  );

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

  const handleChangeFilters = (value: string, name: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters(INITIAL_FILTERS);
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
        filters,
        handleChangeFilters,
        handleClearFilters,
        categories,
        incidents,
      }}
    >
      {children}
    </MapOverviewContext>
  );
};
