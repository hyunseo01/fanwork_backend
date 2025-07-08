import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

export enum InternalUserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  OPERATOR = 'OPERATOR',
}

export enum InternalUserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

@Entity('internal_users')
export class InternalUser extends BaseTimeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number; // PK

  @Column({ length: 20 })
  name: string; // 이름

  @Column({ unique: true })
  email: string; // 이메일 (고유)

  @Column()
  passwordHash: string; // 해시된 비밀번호

  @Column({ type: 'enum', enum: InternalUserStatus })
  status: InternalUserStatus; // 계정 상태

  @Column({ type: 'enum', enum: InternalUserRole })
  role: InternalUserRole; // 관리자 역할 (ADMIN, MANAGER 등)

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date; // 마지막 로그인 시각
}
