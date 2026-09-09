import { apiClient } from '@/api/apiClient';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import type { IncidentReportFormData } from '@/types/MapOverviewTypes';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, type ChangeEvent } from 'react';
import { toast } from 'sonner';

export const useMapForm = () => {
  const { user: { nickname = '', sub } = {} } = useAuth0();
  const { point, handleChangeFormVisible } = useMapOverviewContext();
  const [charCount, setCharCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const INITIAL_INCIDENTREPORT_VALUES: IncidentReportFormData = {
    user: nickname,
    description: '',
    incidentType: '',
    coordinates: point,
  };
  const [incidentReportValues, setIncidentReportValues] =
    useState<IncidentReportFormData>(INITIAL_INCIDENTREPORT_VALUES);

  const isSubmitButtonDisabled =
    !incidentReportValues?.incidentType ||
    !incidentReportValues?.description ||
    isLoading;

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

  const handleSubmit = async () => {
    setIsLoading(true);
    const body = {
      auth0Id: sub,
      auth0User: incidentReportValues?.user,
      categoryId: Number(incidentReportValues?.incidentType),
      description: incidentReportValues?.description,
      location: {
        longitude: incidentReportValues?.coordinates?.longitude,
        latitude: incidentReportValues?.coordinates?.latitude,
      },
    };
    try {
      await apiClient.post('/incidents', body);
      toast.success('Incident reported successfully');
      setIncidentReportValues(INITIAL_INCIDENTREPORT_VALUES);
      handleChangeFormVisible(false);
    } catch (error) {
      console.error(error);
      toast.error(
        'Something went wrong when reporting the incident. Try again'
      );
    } finally {
      apiClient.invalidate('/incidents');
      setIsLoading(false);
    }
  };

  return {
    incidentReportValues,
    handleChangeDescription,
    handleChangeIncidentType,
    charCount,
    isSubmitButtonDisabled,
    handleSubmit,
    isLoading,
  };
};
