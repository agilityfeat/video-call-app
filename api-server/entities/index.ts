import UserEntity from "./userEntity";
import { PrismaClient } from "@prisma/client";

export * as UserEntity from './userEntity'

export interface EntityContext {
  userEntity: UserEntity
}

export const createEntityContext = (prisma = new PrismaClient() ) => ({ userEntity: new UserEntity(prisma) })
