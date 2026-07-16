import type { ReactNode } from 'react';
import type { Coordinates } from './MapOverviewTypes';

export type MapMode = 'route' | 'report';

export interface iMapOverviewContext {
  mode: MapMode;
  isFormVisible: boolean;
  handleChangeMode: (value: MapMode) => void;
  handleChangeFormVisible: (value: boolean) => void;
  handleChangePoint: (value: Coordinates | null) => void;
  point: Coordinates | null;
}

export interface iMapOverviewContextProviderProps {
  children: ReactNode;
}
