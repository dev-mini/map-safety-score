import type { ReactNode } from 'react';

export type MapMode = 'route' | 'report';

export interface iMapOverviewContext {
  mode: MapMode;
}

export interface iMapOverviewContextProviderProps {
  children: ReactNode;
}
