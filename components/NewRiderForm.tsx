'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CreateAndEditRiderType, Nationality, riderSchema } from '@/utils/types';
import { CustomFormCheckbox, CustomFormField, CustomFormSelect, DateInput } from './FormComponents';

function NewRiderForm() {
  const form = useForm<CreateAndEditRiderType>({
    resolver: zodResolver(riderSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      date_of_birth: {
        day: '',
        month: '',
        year: ''
      },
      number: '',
      fim_ranking: '',
      is_wildcard: false,
      is_substitute: false,
      nationality: Nationality.POL
    }
  })

  function onSubmit(values: CreateAndEditRiderType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-muted p-8 rounded max-w-5xl m-auto'
      >
        <h2 className='font-semibold text-4xl mb-6'>Add new rider</h2>
        <div className='grid gap-4'>
          <CustomFormField name='first_name' labelText='First Name' control={form.control} />
          <CustomFormField name='last_name' labelText='Last Name' control={form.control} />
          <DateInput name='date_of_birth' control={form.control} />
          <CustomFormField name='number' labelText='Rider Number' control={form.control} />
          <CustomFormField name='fim_ranking' labelText='FIM Ranking' control={form.control} />
          <CustomFormSelect name='nationality' labelText='Nationality' control={form.control} items={Object.values(Nationality)}/>
          <div className="flex flex-col lg:flex-row gap-4">
            <CustomFormCheckbox name='is_wildcard' labelText='Wildcard?' control={form.control} />
            <CustomFormCheckbox name='is_substitute' labelText='Substitute?' control={form.control} />
          </div>
          <Button type="submit" className="justify-self-start">Add new rider</Button>
        </div>
      </form>
    </Form>
  )

}
export default NewRiderForm;