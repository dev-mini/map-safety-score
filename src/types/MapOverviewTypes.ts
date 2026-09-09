import type { RefObject } from 'react';

export interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface IncidentReportFormData {
  user: string;
  description: string;
  incidentType: string;
  coordinates: Coordinates | null;
}

export interface iMapOverviewFilters {
  incidentType: string;
}

export interface iMapListenerProps {
  pointClickedRef: RefObject<boolean>;
}
