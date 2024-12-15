import * as z from 'zod';

export type Rider = {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: Date;
  nationality: string;
  fim_ranking: number;
  number: number;
  is_wildcard: boolean;
  is_substitute: boolean;
  createdAt: Date;
  updatedAt: Date;
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

export const riderSchema = z.object({
  first_name: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  last_name: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  date_of_birth: z.date().refine(date => date >= new Date('1945-01-01'), {
    message: 'Date of birth cannot be earlier than 01/01/1945',
  }),
  nationality: z.nativeEnum(Nationality),
  fim_ranking: z.number().int().positive(),
  is_wildcard: z.boolean(),
  is_substitute: z.boolean(),
})

export type CreateAndEditRiderType = z.infer<typeof riderSchema>;