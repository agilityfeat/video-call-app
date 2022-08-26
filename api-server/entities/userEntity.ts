import { PrismaClient } from '@prisma/client'

export default class UserEntity {
  constructor(private readonly prisma: PrismaClient) {
  }

  createUser(name: string, password: string, email: string) {
    return this.prisma.user.create({
      data: {
        name,
        password,
        email
      }
    })
  }

  findUser(name: string) {
    return this.prisma.user.findUnique({
      where: { name }
    })
  }

  findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  allUsers() {
    return this.prisma.user.findMany()
  }
}
