import { Partner } from 'src/partners/entities/partner.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('individuals')
export class Individual extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  partner: Partner; // 연결된 파트너 (개인 계정)
}
