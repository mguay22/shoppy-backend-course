import { User } from '@prisma/client';

export type TokenPayload = Omit<User, 'password'>;
