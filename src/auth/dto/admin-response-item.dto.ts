export class AdminProjectDto {
  id: number;
  title: string;
  status: string;
}

export class AdminResponseItemDto {
  id: number;
  name: string;
  email: string;
  role: 'ADMIN' | 'MANAGER' | 'OPERATOR';
  isActive: boolean;
  createdAt: string;
  lastLoginAt: string | null;
  projects: AdminProjectDto[];
}
