import type { iMapOverviewContext } from '@/types/MapOverviewContextTypes';
import { createContext } from 'react';

const initialValues: iMapOverviewContext = {
  mode: 'report',
  isFormVisible: false,
  handleChangeMode: () => {},
  handleChangeFormVisible: () => {},
  handleChangePoint: () => {},
  filters: { incidentType: '' },
  handleChangeFilters: () => {},
  handleClearFilters: () => {},
  point: null,
  categories: [],
  incidents: [],
};

export const MapOverviewContext =
  createContext<iMapOverviewContext>(initialValues);
