import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import type { IncidentReportFormData } from '@/types/MapOverviewTypes';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, type ChangeEvent } from 'react';

export const useMapForm = () => {
  const { user: { email = '' } = {} } = useAuth0();
  const { point } = useMapOverviewContext();
  const [charCount, setCharCount] = useState(0);
  const INITIAL_INCIDENTREPORT_VALUES: IncidentReportFormData = {
    email,
    description: '',
    incidentType: '0',
    coordinates: point,
  };
  const [incidentReportValues, setIncidentReportValues] =
    useState<IncidentReportFormData>(INITIAL_INCIDENTREPORT_VALUES);

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value;
    const charCount = description.length;
    setIncidentReportValues(prevValues => ({
      ...prevValues,
      description,
    }));
    setCharCount(charCount);
  };

  const handleChangeIncidentType = (incidentType: string) => {
    setIncidentReportValues(prevValues => ({
      ...prevValues,
      incidentType,
    }));
  };

  return {
    incidentReportValues,
    handleChangeDescription,
    handleChangeIncidentType,
    charCount,
  };
};
