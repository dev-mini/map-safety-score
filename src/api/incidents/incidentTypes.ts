import type { Coordinates } from '@/types/MapOverviewTypes';
import type { Category } from '../categories/categoryTypes';

export interface iIncidentReqData {
  statusCode: number;
  type: string;
  features: IncidentFeatureGeoJSON[];
}

export type incidentRes<
  P extends GeoJSON.GeoJsonProperties = GeoJSON.GeoJsonProperties,
> = string | GeoJSON.FeatureCollection<GeoJSON.Point, P>;

interface IncidentGeometry {
  type: 'Point';
  coordinates: [number, number];
}

export interface IncidentFeatureGeoJSON {
  type: 'Feature';
  properties: Incident;
  geometry: IncidentGeometry;
}

export interface Incident {
  id: number;
  auth0Id: string;
  auth0User: string;
  categoryId?: number;
  description: string;
  location: Coordinates;
  create_at: Date;
  category?: Category;
}
