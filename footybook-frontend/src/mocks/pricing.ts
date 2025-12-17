// src/mocks/pricing.ts
import { FieldType } from '@/types/field.types';
import type { PriceRule } from '@/types/pricing.types';
import { TimeSlot } from '@/types/pricing.types';

export const mockPriceRules: PriceRule[] = [
  // Sân 5
  { id: 'price-1', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.MORNING, dayOfWeek: [1,2,3,4,5], pricePerHour: 200000, effectiveFrom: '2024-01-01' },
  { id: 'price-2', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.AFTERNOON, dayOfWeek: [1,2,3,4,5], pricePerHour: 250000, effectiveFrom: '2024-01-01' },
  { id: 'price-3', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.EVENING, dayOfWeek: [1,2,3,4,5], pricePerHour: 350000, effectiveFrom: '2024-01-01' },
  { id: 'price-4', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.NIGHT, dayOfWeek: [1,2,3,4,5], pricePerHour: 300000, effectiveFrom: '2024-01-01' },
  { id: 'price-5', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.MORNING, dayOfWeek: [0,6], pricePerHour: 300000, effectiveFrom: '2024-01-01' },
  { id: 'price-6', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.AFTERNOON, dayOfWeek: [0,6], pricePerHour: 350000, effectiveFrom: '2024-01-01' },
  { id: 'price-7', fieldType: FieldType.FIELD_5, timeSlot: TimeSlot.EVENING, dayOfWeek: [0,6], pricePerHour: 400000, effectiveFrom: '2024-01-01' },
  
  // Sân 7
  { id: 'price-8', fieldType: FieldType.FIELD_7, timeSlot: TimeSlot.MORNING, dayOfWeek: [1,2,3,4,5], pricePerHour: 400000, effectiveFrom: '2024-01-01' },
  { id: 'price-9', fieldType: FieldType.FIELD_7, timeSlot: TimeSlot.AFTERNOON, dayOfWeek: [1,2,3,4,5], pricePerHour: 500000, effectiveFrom: '2024-01-01' },
  { id: 'price-10', fieldType: FieldType.FIELD_7, timeSlot: TimeSlot.EVENING, dayOfWeek: [1,2,3,4,5], pricePerHour: 700000, effectiveFrom: '2024-01-01' },
  
  // Sân 11
  { id: 'price-11', fieldType: FieldType.FIELD_11, timeSlot: TimeSlot.MORNING, dayOfWeek: [1,2,3,4,5], pricePerHour: 800000, effectiveFrom: '2024-01-01' },
  { id: 'price-12', fieldType: FieldType.FIELD_11, timeSlot: TimeSlot.EVENING, dayOfWeek: [1,2,3,4,5], pricePerHour: 1200000, effectiveFrom: '2024-01-01' },
  { id: 'price-13', fieldType: FieldType.FIELD_11, timeSlot: TimeSlot.EVENING, dayOfWeek: [0,6], pricePerHour: 1500000, effectiveFrom: '2024-01-01' },
];

// src/mocks/services.ts
import type { ServiceItem } from '@/types/service.types';
import { ServiceCategory } from '@/types/service.types';

export const mockServices: ServiceItem[] = [
  // Equipment Rental
  { id: 'svc-1', venueId: 'venue-1', name: 'Thuê giày đá bóng', category: ServiceCategory.EQUIPMENT_RENTAL, priceField5: 50000, priceField7: 50000, priceField11: 50000, unit: 'đôi', stockQuantity: 20, isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'svc-2', venueId: 'venue-1', name: 'Thuê bóng', category: ServiceCategory.EQUIPMENT_RENTAL, priceField5: 30000, priceField7: 30000, priceField11: 30000, unit: 'quả', stockQuantity: 15, isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'svc-3', venueId: 'venue-1', name: 'Thuê đấu', category: ServiceCategory.EQUIPMENT_RENTAL, priceField5: 100000, priceField7: 100000, priceField11: 100000, unit: 'bộ', stockQuantity: 10, isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  
  // Food & Beverage
  { id: 'svc-4', venueId: 'venue-1', name: 'Nước suối', category: ServiceCategory.FOOD_BEVERAGE, priceField5: 10000, priceField7: 10000, priceField11: 10000, unit: 'chai', stockQuantity: 100, isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'svc-5', venueId: 'venue-1', name: 'Nước tăng lực', category: ServiceCategory.FOOD_BEVERAGE, priceField5: 20000, priceField7: 20000, priceField11: 20000, unit: 'lon', stockQuantity: 50, isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  
  // Professional Services
  { id: 'svc-6', venueId: 'venue-1', name: 'Trọng tài', category: ServiceCategory.PROFESSIONAL, priceField5: 0, priceField7: 200000, priceField11: 300000, unit: 'giờ', isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'svc-7', venueId: 'venue-1', name: 'Quay phim/livestream', category: ServiceCategory.PROFESSIONAL, priceField5: 500000, priceField7: 750000, priceField11: 1000000, unit: 'trận', isAvailable: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
];
