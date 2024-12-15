import { Control, FieldValues, Path } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';

type CustomFormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  labelText?: string;
  type?: string;
}

function CustomFormField<T extends FieldValues>({name, labelText, control, type}: CustomFormFieldProps<T>){
  return (
    <FormField
     control={control}
      name={name}
      render={({ field}) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <FormControl>
            <Input {...field} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
  )
}

type CustomFormSelectProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  items: string[];
  labelText?: string;
}

function CustomFormSelect<T extends FieldValues>({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps<T>){
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{labelText || name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map(item => {
                return (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    ></FormField>
  )
}

type CustomFormCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  labelText?: string;
}

function CustomFormCheckbox<T extends FieldValues>({
  name, control, labelText
}: CustomFormCheckboxProps<T>){
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              className="h-8 w-8" 
              checked={field.value}
              onCheckedChange={field.onChange}
              />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{labelText || name}</FormLabel>
          </div>
        </FormItem>
      )}
    ></FormField>
  )
}

type DateInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
}

function DateInput<T extends FieldValues>({ 
  control, name 
}: DateInputProps<T>) {
  return (
    <div className="flex gap-2">
      <FormField
        control={control}
        name={`${name}.day` as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Day</FormLabel>
            <FormControl>
              <Input {...field} className="w-16" maxLength={2} inputMode="numeric" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name={`${name}.month` as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Month</FormLabel>
            <FormControl>
              <Input {...field} className="w-16" maxLength={2} inputMode="numeric" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name={`${name}.year` as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Year</FormLabel>
            <FormControl>
              <Input {...field} className="w-24" maxLength={4} inputMode="numeric" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export { CustomFormField, CustomFormSelect, CustomFormCheckbox, DateInput };