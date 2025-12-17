import type { BaseEntity } from "./common.types";
import type { FieldType } from "./field.types";

// src/types/teamMatch.types.ts
export const SkillLevel = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
} as const;

export type SkillLevel = typeof SkillLevel[keyof typeof SkillLevel];

export const PlayerPosition = {
  GOALKEEPER: 'GOALKEEPER',
  DEFENDER: 'DEFENDER',
  MIDFIELDER: 'MIDFIELDER',
  STRIKER: 'STRIKER',
  ANY: 'ANY',
} as const;

export type PlayerPosition = typeof PlayerPosition[keyof typeof PlayerPosition];

export const MatchStatus = {
  OPEN: 'OPEN',
  FULL: 'FULL',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export type MatchStatus = typeof MatchStatus[keyof typeof MatchStatus];

export interface TeamMatch extends BaseEntity {
  hostUserId: string;
  hostUserName: string;
  venueId: string;
  venueName: string;
  fieldId: string;
  fieldType: FieldType;
  bookingId: string;
  matchDate: string;
  startTime: string;
  endTime: string;
  skillLevel: SkillLevel;
  neededPositions: PlayerPosition[];
  currentPlayers: number;
  maxPlayers: number;
  costPerPerson: number;
  description?: string;
  status: MatchStatus;
  participants: TeamMatchParticipant[];
}

export interface TeamMatchParticipant {
  id: string;
  matchId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  position: PlayerPosition;
  isPaid: boolean;
  joinedAt: string;
}
