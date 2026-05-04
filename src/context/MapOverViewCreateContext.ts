import type { iMapOverviewContext } from '@/types/MapOverviewContextTypes';
import { createContext } from 'react';

const initialValues: iMapOverviewContext = {
  mode: 'report',
};

export const MapOverviewContext =
  createContext<iMapOverviewContext>(initialValues);
