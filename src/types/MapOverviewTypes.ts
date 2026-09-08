export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface IncidentReportFormData {
  email: string;
  description: string;
  incidentType: string;
  coordinates: Coordinates | null;
}

export interface iMapOverviewFilters {
  incidentType: string;
}
