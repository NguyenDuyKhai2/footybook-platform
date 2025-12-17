import type { BaseEntity } from "./common.types";

// src/types/field.types.ts
export const FieldType = {
  FIELD_5: 'FIELD_5',
  FIELD_7: 'FIELD_7',
  FIELD_11: 'FIELD_11',
} as const;

export type FieldType = typeof FieldType[keyof typeof FieldType];

export const FieldStatus = {
  AVAILABLE: 'AVAILABLE',
  MAINTENANCE: 'MAINTENANCE',
  BOOKED: 'BOOKED',
} as const;

export type FieldStatus = typeof FieldStatus[keyof typeof FieldStatus];

export interface Field extends BaseEntity {
  venueId: string;
  name: string;
  type: FieldType;
  status: FieldStatus;
  hasLighting: boolean;
  // For field 7 splitting into 3 field 5
  parentFieldId?: string; // If this field is part of a split field 7
  isParentField?: boolean; // If this field can be split
  subFields?: string[]; // IDs of sub-fields (for field 7)
}