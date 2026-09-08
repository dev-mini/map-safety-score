export interface Coordinates {
  longitude: number;
  latitude: number;
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

export interface iMapListenerProps {
  isCurrentPointClicked: boolean;
}
