import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { EmailIsTakenError } from 'src/error/email-taken-error';
import { UserInfo } from 'src/types/user';
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
      /**
       * hope to use typeorm encryption but
       * https://github.com/Platekun/NestAuthExample/blob/fdf4401dba1d89b90b66f696ddf37dc1e30fa672/src/users/errors/email-is-taken.error.ts#L3
       * just in case
       */
      user.password = userInfo.password;

      await User.save(user);
      return user;
    }
  }
}
