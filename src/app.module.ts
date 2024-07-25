import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FirebaseMiddleware } from './firebase/firebase.middleware';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://arjun:M5fZyo9bE125iKzq@cluster0.7rwrrej.mongodb.net/test',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirebaseMiddleware)
      .forRoutes({ path: 'auth', method: RequestMethod.POST });
  }
}
