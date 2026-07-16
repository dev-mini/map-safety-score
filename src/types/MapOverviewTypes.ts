export interface Coordinates {
  lng: number;
  lat: number;
}

export interface IncidentReportFormData {
  email: string;
  description: string;
  incidentType: number;
  coordinates: Coordinates | null;
}
