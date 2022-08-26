import { RedisService } from "./redis";

export * from './environment'
export * from './logger'
export * from './redis'

export interface ServiceContext {
  redisService: RedisService
}

export const createServiceContext = () => ({ redisService: RedisService.factory() })
