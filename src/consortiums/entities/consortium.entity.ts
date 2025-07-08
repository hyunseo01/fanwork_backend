import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from '../../partners/entities/partner.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('consortiums')
export class Consortium extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by_user_id' })
  creator: Partner; // 생성한 파트너

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'payer_account_id' })
  payerAccount: Partner; // 비용 지불자 파트너

  @Column()
  title: string; // 컨소시엄 제목

  @Column()
  requestAt: Date; // 요청 날짜

  @Column({ type: 'jsonb' })
  participantsList: any; // 참여자 목록 (JSONB로 저장)
}
