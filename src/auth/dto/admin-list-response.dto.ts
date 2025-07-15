import { AdminResponseItemDto } from './admin-response-item.dto';

export class AdminListResponseDto {
  total: number;
  page: number;
  limit: number;
  items: AdminResponseItemDto[];
}
