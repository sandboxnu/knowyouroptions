import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../entities/user.entity';

/**
 * Decorator to access the currently authenticated user
 * Use this in method parameters only when the JwtAuthGuard is used
 */
export const CurrentUser = createParamDecorator<string[]>(
  async (relations: string[], ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return await User.findOne(request.user.id, { relations });
  },
);
