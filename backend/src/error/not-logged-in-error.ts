import { HttpException, HttpStatus } from '@nestjs/common';

export class NotLoggedInError extends HttpException {
  constructor() {
    super('User is not logged in.', HttpStatus.FORBIDDEN);
  }
}
