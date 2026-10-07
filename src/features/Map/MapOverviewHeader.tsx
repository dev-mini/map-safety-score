import { Button } from '@/components/ui/button';
import { Field, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Route, FlagTriangleRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { MapMode } from '@/types/MapOverviewContextTypes';

export const MapOverviewHeader = () => {
  const {
    filters,
    handleChangeFilters,
    handleClearFilters,
    categories,
    mode,
    handleChangeMode,
  } = useMapOverviewContext();
  const navigate = useNavigate();

  const isClearFiltersVisible = !!filters.incidentType;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/')}>
          <ArrowLeft />
        </button>
        <h1 className="font-bold text-3xl ">Map incident overview</h1>
      </div>
      <div className="flex items-end gap-4">
        <Field className="max-w-50 w-full">
          <FieldLabel>Incident Type</FieldLabel>
          <Select
            name="incidentType"
            value={filters.incidentType}
            onValueChange={value => handleChangeFilters(value, 'incidentType')}
            disabled={!categories?.length}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select incident type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map(({ id, name }) => (
                  <SelectItem key={id} value={id.toString()}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
        {isClearFiltersVisible && (
          <Button className="max-w-32 w-full" onClick={handleClearFilters}>
            Clear
          </Button>
        )}
      </div>
      <Tabs
        defaultValue={mode}
        onValueChange={value => handleChangeMode(value as MapMode)}
      >
        <TabsList variant="line">
          <TabsTrigger value="report">
            <FlagTriangleRight />
            Report
          </TabsTrigger>
          <TabsTrigger value="route">
            <Route />
            Route
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default MapOverviewHeader;
