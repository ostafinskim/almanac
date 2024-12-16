'use server';

import prisma from "./db";
import { CreateAndEditRiderType, Rider, riderSchema } from '@/utils/types';

export async function createNewRiderAction(values: CreateAndEditRiderType): Promise<Rider | null> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    riderSchema.parse(values);
    const rider: Rider = await prisma.rider.create({
      data: {
        ...values,
        date_of_birth: `${values.date_of_birth.year}/${values.date_of_birth.month}/${values.date_of_birth.day}`,
      },
    });
    return rider;
  } catch (error) {
    console.error(error);
    return null;
  }
}