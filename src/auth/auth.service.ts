import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  storeUserDataIntoDb(): string {
    return 'Register route';
  }
}
