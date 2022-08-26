export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export const getEnvironment = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return Environment.PRODUCTION
    default:
      return Environment.DEVELOPMENT
  }
}
