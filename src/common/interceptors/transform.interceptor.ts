import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponse } from '../utils/response.util';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, CommonResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<CommonResponse<T>> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      map((data): CommonResponse<T> => {
        const path = request.url;
        const statusCode = context.switchToHttp().getResponse().statusCode;

        if (
          typeof data === 'object' &&
          data !== null &&
          'success' in data &&
          'message' in data &&
          'data' in data
        ) {
          return {
            ...(data as CommonResponse<T>),
            statusCode,
            path,
          };
        }

        if (
          typeof data === 'object' &&
          data !== null &&
          'message' in data &&
          'data' in data
        ) {
          const { message, data: payload } = data as {
            message: string;
            data: T;
          };

          return {
            success: true,
            message,
            data: payload,
            statusCode,
            path,
          };
        }

        if (typeof data === 'object' && data !== null && 'message' in data) {
          const { message } = data as { message: string };
          return {
            success: true,
            message,
            data: null,
            statusCode,
            path,
          };
        }

        return {
          success: true,
          message: '요청이 성공적으로 처리되었습니다.',
          data,
          statusCode,
          path,
        };
      }),
    );
  }
}
