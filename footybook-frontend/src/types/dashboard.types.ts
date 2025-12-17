import type { FieldType } from "./field.types";
import type { TimeSlot } from "./pricing.types";

// src/types/dashboard.types.ts
export interface RevenueStats {
  today: number;
  week: number;
  month: number;
  year: number;
}

export interface BookingStats {
  total: number;
  pending: number;
  confirmed: number;
  completed: number;
  cancelled: number;
  noShow: number;
  cancellationRate: number;
}

export interface FieldStats {
  fieldId: string;
  fieldName: string;
  fieldType: FieldType;
  totalBookings: number;
  revenue: number;
  utilizationRate: number;
}

export interface TimeSlotStats {
  timeSlot: TimeSlot;
  bookingCount: number;
  revenue: number;
}

export interface ServiceRevenue {
  serviceId: string;
  serviceName: string;
  quantity: number;
  revenue: number;
}