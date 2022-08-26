import Redis from "ioredis";

/**
 * Redis Keys
 */
const userSessionKey = (sessionId: string) => `appSession:${sessionId}`

/**
 * Wrapper for ioredis
 * https://github.com/luin/ioredis
 */
export class RedisService {
  private static readonly SCAN_COUNT = 100

  constructor(
    private readonly redis: Redis
  ) {
  }

  async getUserSession(sessionId: string) {
    const value = await this.redis.get(userSessionKey(sessionId))
    if (!value) {
      return null
    }
    return JSON.parse(value)
  }

  async deleteUserSession(sessionId: string) {
    return this.redis.del(userSessionKey(sessionId))
  }

  /**
   * Saves a session object
   * @param sessionId
   * @param sessionData
   * @param ttl expire time in seconds
   */
  async saveUserSession(sessionId: string, sessionData: object, ttl?: number) {
    const value = JSON.stringify(sessionData)

    let key = userSessionKey(sessionId);
    if (ttl) {
      await this.setUserSessionTtl(sessionId, ttl)
    }

    await this.redis.set(key, value)
  }

  async setUserSessionTtl(sessionId: string, ttl: number) {
    let key = userSessionKey(sessionId);
    this.redis.expire(key, ttl)
  }

  async clearAllSessions() {
    const keys = await this.getAllSessionKeys()
    await Promise.all(keys.map(async k => await this.redis.del(k)))
  }

  async getAllSessionKeys() {
    const stream = this.redis.scanStream({
      match: userSessionKey('*'),
      count: RedisService.SCAN_COUNT
    })

    let keys: string[] = []
    await new Promise<void>((resolve, reject) => {
      stream.on('data', (resultKeys) => {
        keys = keys.concat(resultKeys)
      })
      stream.on('error', (e) => {
        reject(e)
      })
      stream.on('end', () => {
        resolve()
      })
    })
    return keys
  }

  static factory() {
    const redisUrl = process.env.REDIS_URL
    if (!redisUrl) {
      throw new Error('RedisService: Unable to get redis url')
    }

    return new RedisService(new Redis(redisUrl))
  }
}
