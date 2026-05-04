import type { ReactNode } from 'react';

export type MapMode = 'route' | 'report';

export interface iMapOverviewContext {
  mode: MapMode;
  isFormVisible: boolean;
  handleChangeMode: (value: MapMode) => void;
  handleChangeFormVisible: (value: boolean) => void;
}

export interface iMapOverviewContextProviderProps {
  children: ReactNode;
}
