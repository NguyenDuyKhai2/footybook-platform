import type { BaseEntity } from "./common.types";

// src/types/restriction.types.ts
export interface PhoneRestriction extends BaseEntity {
  phoneNumber: string;
  noShowCount: number;
  restrictedUntil: string;
  isPermanent: boolean;
  reason: string;
}
