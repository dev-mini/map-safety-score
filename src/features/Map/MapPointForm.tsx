import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useMapOverviewContext } from '@/context/useMapOverviewContext';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useMapForm } from './useMapForm';
import { X } from 'lucide-react';

const MapPointForm = () => {
  const { isFormVisible, handleChangeFormVisible } = useMapOverviewContext();
  const {
    incidentReportValues: { email, description, incidentType, coordinates },
    handleChangeDescription,
    handleChangeIncidentType,
    charCount,
  } = useMapForm();

  return (
    <Drawer open={isFormVisible} direction="right" dismissible={false}>
      <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
        <DrawerHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            className="absolute top-2 right-2"
            onClick={() => handleChangeFormVisible(false)}
          >
            <X />
          </Button>
          <DrawerTitle>REPORT AN INCIDENT</DrawerTitle>
          <DrawerDescription>
            Provide details about the incident location.
          </DrawerDescription>
          <DrawerDescription>
            Coordinates: {coordinates?.latitude.toFixed(4)},
            {coordinates?.longitude.toFixed(4)}
          </DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4">
          <FieldSet className="w-full max-w-xs">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Email</FieldLabel>
                <Input id="username" type="text" value={email} disabled />
              </Field>
              <Field>
                <FieldLabel htmlFor="incident-type">Incident Type</FieldLabel>
                <Select
                  defaultValue={incidentType}
                  onValueChange={handleChangeIncidentType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Incident Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="0" disabled>
                        Select Incident Type
                      </SelectItem>
                      <SelectItem value={'1'}>Security</SelectItem>
                      <SelectItem value={'2'}>Building</SelectItem>
                      <SelectItem value={'3'}>Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="block-end-textarea">
                  Description
                </FieldLabel>
                <FieldDescription>
                  Provide a description to understand the incident better. This
                  will help other users to take appropriate action.
                </FieldDescription>
                <InputGroup>
                  <InputGroupTextarea
                    id="block-end-textarea"
                    placeholder="Write a comment..."
                    maxLength={280}
                    value={description}
                    onChange={handleChangeDescription}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText>{charCount}/280</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button
              variant="outline"
              onClick={() => handleChangeFormVisible(false)}
            >
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MapPointForm;
