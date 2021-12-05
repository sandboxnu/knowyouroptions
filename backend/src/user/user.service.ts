import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { EmailIsTakenError } from 'src/error/email-taken-error';
import { IncorrectPasswordError } from 'src/error/incorrect-password-error';
import { NotLoggedInError } from 'src/error/not-logged-in-error';
import { UnknownEmailError } from 'src/error/unknown-email-error';
import { SignInInfo, UserInfo } from 'src/types/user';
import { Connection } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private connection: Connection, // @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async createUser(userInfo: UserInfo): Promise<User> {
    const existingUser = await User.findOne({
      email: userInfo.email,
    });

    if (existingUser) {
      throw new EmailIsTakenError();
    } else {
      const user = User.create();
      user.email = userInfo.email;
      user.name = userInfo.name;
      user.password = userInfo.password;

      await User.save(user);
      return user;
    }
  }

  public async getUser(info: SignInInfo): Promise<User> {
    const existingUser = await User.findOne({
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

  public async getById(id: number): Promise<User> {
    const existingUser = await User.findOne({
      id: id,
    });

    if (existingUser) {
      return existingUser;
    } else {
      throw new NotLoggedInError();
    }
  }
}
