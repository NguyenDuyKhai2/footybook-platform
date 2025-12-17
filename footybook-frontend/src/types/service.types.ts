import type { BaseEntity } from "./common.types";

// src/types/service.types.ts
export const ServiceCategory = {
  EQUIPMENT_RENTAL: 'EQUIPMENT_RENTAL',
  EQUIPMENT_SALE: 'EQUIPMENT_SALE',
  FOOD_BEVERAGE: 'FOOD_BEVERAGE',
  PROFESSIONAL: 'PROFESSIONAL',
} as const;

export type ServiceCategory = typeof ServiceCategory[keyof typeof ServiceCategory];

export interface ServiceItem extends BaseEntity {
  venueId: string;
  name: string;
  category: ServiceCategory;
  description?: string;
  priceField5?: number;
  priceField7?: number;
  priceField11?: number;
  unit: string; // "hour", "piece", "set"
  stockQuantity?: number;
  isAvailable: boolean;
}