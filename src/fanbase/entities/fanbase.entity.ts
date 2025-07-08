import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { KResource } from '../../k-resources/entities/k-resource.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('fanbase_info')
export class FanbaseInfo extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @Column({ type: 'jsonb' })
  metrics: any; // 수집된 지표 (JSON)

  @Column()
  collectedAt: Date; // 지표 수집일

  @ManyToOne(() => KResource, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'k_resource_id' })
  kResource: KResource; // 연결된 K-리소스
}
