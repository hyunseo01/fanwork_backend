import { Partner } from 'src/partners/entities/partner.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Settlement } from 'src/settlements/entities/settlement.entity';
import { BaseTimeEntity } from 'src/common/entities/BaseTime.entity';

@Entity('transactions')
export class Transactions extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Settlement, (si) => si.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'settlement_item_id' })
  settlements: Settlement;

  @ManyToOne(() => Partner)
  @JoinColumn({ name: 'source_account_id' })
  sourceAccount: Partner;

  @ManyToOne(() => Partner)
  @JoinColumn({ name: 'destination_account_id' })
  destinationAccount: Partner;

  @Column({ type: 'enum', enum: ['INCOME', 'OUTCOME'] })
  transaction_type: 'INCOME' | 'OUTCOME';

  @Column({ type: 'timestamp' })
  transaction_date: Date;

  @Column('decimal', { precision: 12, scale: 2 })
  amount_usd: number;

  @Column()
  payment_method: string;

  @Column()
  transaction_reference: string;

  @Column({ type: 'text', nullable: true })
  notes: string | null;
}
