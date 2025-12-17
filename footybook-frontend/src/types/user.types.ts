import type { BaseEntity } from "./common.types";

export const UserRole = {
  CUSTOMER: 'CUSTOMER',
  STAFF: 'STAFF',
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export const UserStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  BANNED: 'BANNED',
} as const;

export type UserStatus = typeof UserStatus[keyof typeof UserStatus];

export interface User extends BaseEntity {
  email: string;
  phoneNumber: string;
  fullName: string;
  avatarUrl?: string;
  role: UserRole;
  status: UserStatus;
  lastLoginAt?: string;
}
