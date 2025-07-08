import { BaseTimeEntity } from 'src/common/entities/BaseTime.entity';
import { Consortium } from 'src/consortiums/entities/consortium.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('consortium_participants')
export class ConsortiumParticipant extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Consortium, (cons) => cons.participantsList, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  consortium: Consortium;

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  account: Partner;

  @Column({
    type: 'enum',
    enum: [
      'Resource_provider',
      'Service_provider',
      'Sponsor',
      'Agency',
      'Investor',
      'Partner',
    ],
  })
  roles:
    | 'Resource_provider'
    | 'Service_provider'
    | 'Sponsor'
    | 'Agency'
    | 'Investor'
    | 'Partner';
}
