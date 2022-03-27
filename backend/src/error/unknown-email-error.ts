import { HttpException, HttpStatus } from '@nestjs/common';

export class UnknownEmailError extends HttpException {
  constructor() {
    super('The email provided cannot be found.', HttpStatus.CONFLICT);
  }
}
