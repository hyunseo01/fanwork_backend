import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from '../../partners/entities/partner.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('organizations')
export class Organization extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @Column()
  address: string; // 조직 주소

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  partner: Partner; // 연결된 파트너 (법인 계정)
}
