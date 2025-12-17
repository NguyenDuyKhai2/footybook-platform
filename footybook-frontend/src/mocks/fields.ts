// src/mocks/fields.ts
import type { Field } from '@/types/field.types';
import { FieldType, FieldStatus } from '@/types/field.types';

export const mockFields: Field[] = [
  // 5 sân 5
  { id: 'field-5-1', venueId: 'venue-1', name: 'Sân 5 số 1', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-2', venueId: 'venue-1', name: 'Sân 5 số 2', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-3', venueId: 'venue-1', name: 'Sân 5 số 3', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-4', venueId: 'venue-1', name: 'Sân 5 số 4', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-5', venueId: 'venue-1', name: 'Sân 5 số 5', type: FieldType.FIELD_5, status: FieldStatus.MAINTENANCE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  
  // 3 sân 7 (có thể tách thành sân 5)
  { 
    id: 'field-7-1', 
    venueId: 'venue-1', 
    name: 'Sân 7 số 1', 
    type: FieldType.FIELD_7, 
    status: FieldStatus.AVAILABLE, 
    hasLighting: true, 
    isParentField: true,
    subFields: ['field-5-7-1a', 'field-5-7-1b', 'field-5-7-1c'],
    createdAt: '2024-01-01T10:00:00Z', 
    updatedAt: '2024-01-01T10:00:00Z', 
    deleted: false 
  },
  { id: 'field-7-2', venueId: 'venue-1', name: 'Sân 7 số 2', type: FieldType.FIELD_7, status: FieldStatus.AVAILABLE, hasLighting: true, isParentField: true, subFields: ['field-5-7-2a', 'field-5-7-2b', 'field-5-7-2c'], createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-7-3', venueId: 'venue-1', name: 'Sân 7 số 3', type: FieldType.FIELD_7, status: FieldStatus.AVAILABLE, hasLighting: true, isParentField: true, subFields: ['field-5-7-3a', 'field-5-7-3b', 'field-5-7-3c'], createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  
  // Sub-fields từ sân 7
  { id: 'field-5-7-1a', venueId: 'venue-1', name: 'Sân 5 (từ sân 7-1) - Khu A', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, parentFieldId: 'field-7-1', createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-7-1b', venueId: 'venue-1', name: 'Sân 5 (từ sân 7-1) - Khu B', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, parentFieldId: 'field-7-1', createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-5-7-1c', venueId: 'venue-1', name: 'Sân 5 (từ sân 7-1) - Khu C', type: FieldType.FIELD_5, status: FieldStatus.AVAILABLE, hasLighting: true, parentFieldId: 'field-7-1', createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  
  // 2 sân 11
  { id: 'field-11-1', venueId: 'venue-1', name: 'Sân 11 số 1', type: FieldType.FIELD_11, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
  { id: 'field-11-2', venueId: 'venue-1', name: 'Sân 11 số 2', type: FieldType.FIELD_11, status: FieldStatus.AVAILABLE, hasLighting: true, createdAt: '2024-01-01T10:00:00Z', updatedAt: '2024-01-01T10:00:00Z', deleted: false },
];
