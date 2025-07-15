import { Consortium } from 'src/consortiums/entities/consortium.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Contract } from '../../contracts/entities/contract.entity';
import { Partner } from '../../partners/entities/partner.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';
import { Transactions } from 'src/transactions/entities/transaction.entity';

@Entity('settlements')
export class Settlement extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // 정산 항목 고유 ID

  @ManyToOne(() => Consortium, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'consortium_id' })
  consortium: Consortium; // 연관된 컨소시엄

  @ManyToOne(() => Contract, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'contract_id' })
  contract: Contract; // 연관된 계약

  @Column()
  description: string; // 정산 항목 설명 (예: 계약금, 잔금 등)

  @Column()
  type: string; // 정산 유형 (enum 지정 가능)

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'source_account_id' })
  sourceAccount: Partner; // 지불 계정

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'destination_account_id' })
  destinationAccount: Partner; // 수령 계정

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amountDue: number; // 지급 금액

  @Column({ length: 3 })
  currency: string; // 통화 (예: USD)

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  totalDue: number; // 총 지급액

  @Column()
  dueDate: Date; // 지급 예정일

  @Column()
  status: string; // 정산 상태 (예: INVOICED 등)

  @Column({ type: 'jsonb', nullable: true })
  transactionDate: any; // 거래 기록 모음 (JSONB)

  @Column({ nullable: true, type: 'text' })
  notes: string; // 메모 및 지급 방식

  @Column({ default: false })
  isApproved: boolean; // 상대방 승인 여부

  @OneToMany(() => Transactions, (t) => t.settlements)
  transactions: Transactions[];
}
