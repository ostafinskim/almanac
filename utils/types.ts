import * as z from 'zod';

export type Rider = {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  nationality: string;
  fim_ranking: string;
  number: string;
  is_wildcard: boolean;
  is_substitute: boolean;
}

export enum Nationality {
  AUS = 'Australia',
  POL = 'Poland',
  GBR = 'Great Britain',
  DNK = 'Denmark',
  SWE = 'Sweden',
  USA = 'United States',
  RUS = 'Russia',
  GER = 'Germany',
  CZE = 'Czech Republic',
  SVK = 'Slovakia',
  FIN = 'Finland',
  FRA = 'France',
  ITA = 'Italy',
  NZL = 'New Zealand',
  UKR = 'Ukraine',
  SVN = 'Slovenia',
  HUN = 'Hungary',
  LVA = 'Latvia',
  HRV = 'Croatia',
  ARG = 'Argentina',
}

export const dateSchema = z.object({
  day: z.string().min(1).max(2),
  month: z.string().min(1).max(2),
  year: z.string().length(4)
}).refine((data) => {
  const date = new Date(`${data.year}-${data.month}-${data.day}`);
  return date >= new Date('1945-01-01');
}, {
  message: "Date of birth must be after 1945-01-01"
});

export const riderSchema = z.object({
  first_name: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  last_name: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  date_of_birth: dateSchema,
  number: z.string().min(1, {
    message: 'Number must be at least 1 character.',
  }),
  nationality: z.nativeEnum(Nationality),
  fim_ranking: z.string().min(1, {
    message: 'FIM Ranking must be at least 1 character.',
  }),
  is_wildcard: z.boolean(),
  is_substitute: z.boolean(),
})

export type DateInputType = z.infer<typeof dateSchema>;
export type CreateAndEditRiderType = z.infer<typeof riderSchema>;