// src/mocks/users.ts
import type { User } from '@/types/user.types';
import { UserRole, UserStatus } from '@/types/user.types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'customer@footybook.com',
    phoneNumber: '0901234567',
    fullName: 'Nguyễn Văn An',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer1',
    role: UserRole.CUSTOMER,
    status: UserStatus.ACTIVE,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    deleted: false,
  },
  {
    id: 'owner-1',
    email: 'owner@footybook.com',
    phoneNumber: '0902345678',
    fullName: 'Trần Văn Bình',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=owner1',
    role: UserRole.OWNER,
    status: UserStatus.ACTIVE,
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:00:00Z',
    deleted: false,
  },
  {
    id: 'staff-1',
    email: 'staff@footybook.com',
    phoneNumber: '0903456789',
    fullName: 'Lê Thị Cúc',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=staff1',
    role: UserRole.STAFF,
    status: UserStatus.ACTIVE,
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-12T10:00:00Z',
    deleted: false,
  },
  {
    id: 'admin-1',
    email: 'admin@footybook.com',
    phoneNumber: '0904567890',
    fullName: 'Phạm Văn Dũng',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin1',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z',
    deleted: false,
  },
];




