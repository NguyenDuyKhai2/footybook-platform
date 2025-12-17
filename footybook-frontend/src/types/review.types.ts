import type { BaseEntity } from "./common.types";

// src/types/review.types.ts
export const ReviewStatus = {
  ACTIVE: 'ACTIVE',
  HIDDEN: 'HIDDEN',
  REPORTED: 'REPORTED',
} as const;

export type ReviewStatus = typeof ReviewStatus[keyof typeof ReviewStatus];

export interface Review extends BaseEntity {
  userId: string;
  userName: string;
  userAvatar?: string;
  venueId: string;
  bookingId: string;
  overallRating: number;
  fieldQuality?: number;
  serviceQuality?: number;
  amenitiesRating?: number;
  comment: string;
  images?: string[];
  status: ReviewStatus;
}