import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InternalUser } from '../../internal-users/entities/internal-user.entity';
import { Partner } from '../../partners/entities/partner.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('k_resources')
export class KResource extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'provider_account_id' })
  providerAccount: Partner; // 리소스 제공 파트너

  @ManyToOne(() => InternalUser, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'manager_id' })
  manager: InternalUser; // 담당 관리자 (nullable)

  @Column()
  resourceType: string; // 리소스 유형

  @Column()
  name: string; // 리소스 이름

  @Column({ length: 2 })
  countryCode: string; // 국가 코드 (ISO-3166-1 alpha-2)

  @Column()
  description: string; // 설명

  @Column()
  status: string; // 상태

  @Column({ type: 'jsonb' })
  details: any; // 상세 정보 (JSONB)
}
