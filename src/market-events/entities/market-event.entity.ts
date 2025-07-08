
import { Partner } from 'src/partners/entities/partner.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('market_events')
export class MarketEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  event_name: string;

  @Column({
    type: 'enum',
    enum: ['CONCERT', 'FESTIVAL', 'AWARDS', 'FAN_MEETING', 'POPUP_STORE'],
  })
  event_type: 'CONCERT' | 'FESTIVAL' | 'AWARDS' | 'FAN_MEETING' | 'POPUP_STORE';

  @Column({ length: 2 })
  country_code: string;

  @Column()
  city: string;

  @Column({ type: 'date' })
  event_start_date: string;

  @Column({ type: 'date' })
  event_end_date: string;

  @ManyToOne(() => Partner)
  @JoinColumn({ name: 'organizer_id' })
  organizer: Partner;

  @Column()
  venue: string;

  @Column('text')
  description: string;

  @Column({ type: 'jsonb' })
  participants: any;

  @Column()
  source_url: string;

  @CreateDateColumn()
  created_at: Date;
}
