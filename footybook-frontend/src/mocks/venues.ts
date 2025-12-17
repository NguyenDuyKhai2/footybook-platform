// src/mocks/venues.ts
import type { Venue } from '@/types/venue.types';
import { mockFields } from './fields';
import { mockPriceRules } from './pricing';

export const mockVenues: Venue[] = [
  {
    id: 'venue-1',
    ownerId: 'owner-1',
    name: 'Sân bóng Thành Công',
    description: 'Sân bóng chất lượng cao với cỏ nhân tạo, đèn chiếu sáng hiện đại. Phù hợp cho các trận đấu chuyên nghiệp và giải trí.',
    address: '123 Nguyễn Văn Linh, Quận 7, TP.HCM',
    phoneNumber: '0281234567',
    latitude: 10.7324,
    longitude: 106.7182,
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
      'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800',
      'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800',
    ],
    amenities: ['Parking', 'Shower', 'WiFi', 'Locker', 'Canteen', 'First Aid'],
    fields: mockFields,
    priceRules: mockPriceRules,
    averageRating: 4.5,
    totalReviews: 128,
    isApproved: true,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
    deleted: false,
  },
];