import UserEntity from "../entities/userEntity";
import bcrypt from 'bcrypt'
import { ServiceContext } from "../services";
import { EntityContext } from "../entities";
import { User } from "@prisma/client";

export class InvalidPassword extends Error {
  constructor() {
    super(`Password Not Valid`)
  }
}

export class UsernameNotFoundError extends Error {
  constructor(message: string) {
    super(`User Name Not Found: ${message}`)
  }
}

export class UsernameAlreadyExistsError extends Error {
  constructor(message: string) {
    super(`User Name Already Exists: ${message}`)
  }
}

export class UserEmailAlreadyExistsError extends Error {
  constructor(message: string) {
    super(`User Email Already Exists: ${message}`)
  }
}

export interface UserModel {
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

const userFromEntity = (entity: User): UserModel => ({
  name: entity.name,
  email: entity.email,
  createdAt: entity.createdAt,
  updatedAt: entity.updatedAt
})

export class UserInteractor {
  private constructor(
    private readonly userEntity: UserEntity
  ) {
  }

  public async createUser(username: string, password: string, email: string) {
    let user = await this.getUserByUsername(username)
    if (user) {
      throw new UsernameAlreadyExistsError(user.name)
    }

    const hashedPassword = await this.hashPassword(password)
    user = await this.userEntity.createUser(username, hashedPassword, email)
    if (!user) {
      return null
    }
    return userFromEntity(user)
  }

  public async loginUser(username: string, password: string) {
    await this.checkUserPassword(username, password)
  }

  public async getUserInfo(username: string) {
    let entity = await this.getUserByUsername(username)
    if (!entity) {
      return null
    }
    return userFromEntity(entity)
  }

  private hashPassword(password: string) {
    return bcrypt.hash(password, 8)
  }

  private async checkUserPassword(username: string, password: string) {
    const user = await this.getUserByUsername(username)
    if (!user) {
      throw new UsernameNotFoundError(username)
    }

    const passwordValid = await this.comparePassword(password, user.password);
    if (!passwordValid) {
      throw new InvalidPassword()
    }
  }

  private async comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash)
  }

  private getUserByUsername(username: string) {
    return this.userEntity.findUser(username)
  }

  static factory(serviceContext: ServiceContext, entityContext: EntityContext) {
    return new UserInteractor(entityContext.userEntity)
  }
}
