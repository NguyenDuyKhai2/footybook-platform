// src/types/pricing.types.ts
import type { FieldType } from './field.types';
export const TimeSlot = {
  MORNING: 'MORNING', // 6:00 - 12:00
  AFTERNOON: 'AFTERNOON', // 12:00 - 17:00
  EVENING: 'EVENING', // 17:00 - 22:00
  NIGHT: 'NIGHT', // 22:00 - 24:00
} as const;

export type TimeSlot = typeof TimeSlot[keyof typeof TimeSlot];

export interface PriceRule {
  id: string;
  fieldType: FieldType;
  timeSlot: TimeSlot;
  dayOfWeek: number[]; // 0-6 (Sunday-Saturday)
  pricePerHour: number;
  effectiveFrom: string;
  effectiveTo?: string;
}
