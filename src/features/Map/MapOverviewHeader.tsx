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

const MapOverviewHeader = () => {
  const { filters, handleChangeFilters, handleClearFilters } =
    useMapOverviewContext();

  const isClearFiltersVisible = !!filters.incidentType;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl mb-6">Map incident overview</h1>
      <div className="flex items-end gap-4">
        <Field className="max-w-50 w-full">
          <FieldLabel>Incident Type</FieldLabel>
          <Select
            name="incidentType"
            value={filters.incidentType}
            onValueChange={value => handleChangeFilters(value, 'incidentType')}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select incident type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Security</SelectItem>
                <SelectItem value="2">Building</SelectItem>
                <SelectItem value="3">Others</SelectItem>
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
    </div>
  );
};

export default MapOverviewHeader;
