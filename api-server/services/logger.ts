import pino from 'pino'

const logger = pino({
  level: 'debug'
})

export default logger

export const namedLogger = (name: string) => ({
  debug: (message: string, args: object) => logger.debug({ name, msg: message, ...args }),
  error: (message: string, err: Error, args: object) => logger.error({ name, msg: message, err, ...args})
})
