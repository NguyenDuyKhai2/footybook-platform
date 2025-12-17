import type { BaseEntity } from "./common.types";
import type { Field } from "./field.types";
import type { PriceRule } from "./pricing.types";

// src/types/venue.types.ts
export interface Venue extends BaseEntity {
  ownerId: string;
  name: string;
  description?: string;
  address: string;
  phoneNumber?: string;
  latitude?: number;
  longitude?: number;
  images: string[];
  amenities: string[]; // ["parking", "shower", "wifi", "locker"]
  fields: Field[];
  priceRules: PriceRule[];
  averageRating: number;
  totalReviews: number;
  isApproved: boolean;
}
