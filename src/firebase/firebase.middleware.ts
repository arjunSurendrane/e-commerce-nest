import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { getAuth } from 'firebase-admin/auth';
import firebaseAppConfig from './firebase.config';
import { CustomRequest } from 'src/types/express';

@Injectable()
export class FirebaseMiddleware implements NestMiddleware {
  async use(req: CustomRequest, res: Response, next: NextFunction) {
    try {
      const defaultAuth = getAuth(firebaseAppConfig);
      const BearerToken = req.headers?.authentication as string | undefined;
      if (!BearerToken) {
        console.log('error token not exist');
        return;
      }
      const token = BearerToken.split(' ')[0];
      const decodeToken = await defaultAuth.verifyIdToken(token);
      if (!decodeToken) {
        console.log('user not authenticated');
        return;
      }
      req.user = decodeToken;
      console.log(`Request...`, req);
      next();
    } catch (error) {
      console.log('ERROR:', error);
      return;
    }
  }
}
