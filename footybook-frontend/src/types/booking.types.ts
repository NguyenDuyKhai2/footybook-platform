import type { BaseEntity } from "./common.types";

// src/types/booking.types.ts
export const BookingStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CHECKED_IN: 'CHECKED_IN',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW',
} as const;

export type BookingStatus = typeof BookingStatus[keyof typeof BookingStatus];

export const PaymentStatus = {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
} as const;

export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];

export const PaymentMethod = {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  VNPAY: 'VNPAY',
} as const;

export type PaymentMethod = typeof PaymentMethod[keyof typeof PaymentMethod];

export interface BookingService {
  serviceId: string;
  serviceName: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Booking extends BaseEntity {
  userId: string;
  venueId: string;
  fieldId: string;
  bookingDate: string;
  startTime: string; // "14:00"
  endTime: string; // "16:00"
  duration: number; // hours
  fieldPrice: number;
  services: BookingService[];
  totalServicePrice: number;
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  customerName: string;
  customerPhone: string;
  numberOfPlayers: number;
  notes?: string;
  cancellationReason?: string;
  cancelledBy?: string;
  cancelledAt?: string;
}
