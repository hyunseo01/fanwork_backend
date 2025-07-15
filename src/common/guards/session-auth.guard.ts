import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Session } from 'express-session';

interface AuthenticatedRequest extends Request {
  session: Session & {
    user?: {
      id: number;
      name: string;
      role: string;
      isFirstLogin: boolean;
    };
  };
}

@Injectable()
export class SessionAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<AuthenticatedRequest>();

    if (!req.session?.user) {
      throw new UnauthorizedException('로그인이 필요합니다.');
    }

    return true;
  }
}
