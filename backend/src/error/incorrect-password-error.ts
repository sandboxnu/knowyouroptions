import { HttpException, HttpStatus } from '@nestjs/common';

export class IncorrectPasswordError extends HttpException {
  constructor() {
    super('The password provided is incorrect.', HttpStatus.CONFLICT);
  }
}
