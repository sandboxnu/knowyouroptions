import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { EmailIsTakenError } from 'src/error/email-taken-error';
import { IncorrectPasswordError } from 'src/error/incorrect-password-error';
import { UnknownEmailError } from 'src/error/unknown-email-error';
import { SignInInfo, UserInfo } from 'src/types/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Creates a user in the database with the given user information
   * @param userInfo the information of the user to create
   * @return the created User entity
   * @throws EmailIsTakenError if the email is taken
   */
  public async createUser(userInfo: UserInfo): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      email: userInfo.email,
    });

    if (existingUser) {
      throw new EmailIsTakenError();
    } else {
      const user = this.userRepository.create();
      user.email = userInfo.email;
      user.name = userInfo.name;
      user.password = userInfo.password;

      await this.userRepository.save(user);
      return user;
    }
  }

  /**
   * Returns the user associated with the specified sign-in info
   * @param info sign in information
   * @throws IncorrectPasswordError wrong password
   * @throws UnknownEmailError email not found
   */
  public async getUser(info: SignInInfo): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      email: info.email,
    });

    if (existingUser) {
      if (info.password !== existingUser.password) {
        throw new IncorrectPasswordError();
      } else {
        return existingUser;
      }
    } else {
      throw new UnknownEmailError();
    }
  }

  /**
   * Returns the user associated with the given ID
   * @param id user ID
   */
  public async getById(id: number): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      id: id,
    });

    return existingUser || undefined;
  }
}
