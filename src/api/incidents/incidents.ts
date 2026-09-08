import type { iIncidentReqData } from './incidentTypes';

export const getIncidents = (url: string): Promise<iIncidentReqData> => {
  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (res.ok) return res.json();
      else throw new Error('Failed to fetch incidents data');
    })
    .catch(err => {
      console.error(err);
    });
};
