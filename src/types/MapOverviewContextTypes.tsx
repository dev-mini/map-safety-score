import type { ReactNode } from 'react';

export type MapMode = 'route' | 'report';

export interface iPoint {
  lng: number;
  lat: number;
}

export interface iMapOverviewContext {
  mode: MapMode;
  isFormVisible: boolean;
  handleChangeMode: (value: MapMode) => void;
  handleChangeFormVisible: (value: boolean) => void;
  handleChangePoint: (value: iPoint | null) => void;
  point: iPoint | null;
}

export interface iMapOverviewContextProviderProps {
  children: ReactNode;
}
