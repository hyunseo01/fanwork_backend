import { Request } from 'express';
import { Session } from 'express-session';

export interface AuthenticatedRequest extends Request {
  session: Session & {
    user?: {
      id: number;
      name: string;
      role: string;
      isFirstLogin: boolean;
    };
  };
}
