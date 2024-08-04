import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './shema/user.schema';
import { CustomRequest } from 'src/types/express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async create(@Req() req: CustomRequest): Promise<User> {
    if (!req.user) {
      throw new Error('Unauthorized user');
    }
    const user = req.user;
    return this.authService.storeUserDataIntoDb(user);
  }
}
