export interface CommonResponse<T> {
  success: boolean;
  statusCode?: number;
  message: string;
  path?: string;
  data: T | null;
}
