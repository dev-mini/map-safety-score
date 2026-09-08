import type { ReactNode } from 'react';
import type { Coordinates, iMapOverviewFilters } from './MapOverviewTypes';
import type { Category } from '@/api/categories/categoryTypes';

export type MapMode = 'route' | 'report';

export interface iMapOverviewContext {
  mode: MapMode;
  isFormVisible: boolean;
  handleChangeMode: (value: MapMode) => void;
  handleChangeFormVisible: (value: boolean) => void;
  handleChangePoint: (value: Coordinates | null) => void;
  point: Coordinates | null;
  filters: iMapOverviewFilters;
  handleChangeFilters: (value: string, name: string) => void;
  handleClearFilters: () => void;
  categories: Category[];
}

export interface iMapOverviewContextProviderProps {
  children: ReactNode;
}
