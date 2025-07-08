

import { Partner } from 'src/partners/entities/partner.entity';
import { Project } from 'src/projects/entities/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity('project_participants')
export class ProjectParticipant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.participants, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;

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
