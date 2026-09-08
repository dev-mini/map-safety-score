import type { Coordinates } from '@/types/MapOverviewTypes';
import type { Category } from '../categories/categoryTypes';

export interface iIncidentReqData {
  statusCode: number;
  incidents: Incident[];
}

export interface Incident {
  id: number;
  auth0Id: string;
  auth0User: string;
  categoryId: number;
  description: string;
  location: Coordinates;
  create_at: Date;
  category?: Category;
}
