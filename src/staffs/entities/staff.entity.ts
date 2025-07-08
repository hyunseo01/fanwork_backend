import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Organization } from '../../organizations/entities/organization.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('staffs')
export class Staff extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  // 명세에는 존재하는 컬럼인데 중복으로 보이기에 일단 제거함
  // @Column()
  // organizationName: string; // 회사명

  @Column()
  fullName: string; // 직원명

  @Column({ unique: true })
  email: string; // 로그인용 이메일

  @Column()
  passwordHash: string; // 로그인용 비밀번호 (해시값)

  @Column()
  roles: string; // 회사 내 역할 (ex: Admin 등)

  @Column()
  status: string; // 계정 상태

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date; // 마지막 로그인 일시

  @ManyToOne(() => Organization, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organization_id' })
  organization: Organization; // 소속 조직 (FK)
}
