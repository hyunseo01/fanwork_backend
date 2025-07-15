import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { BaseTimeEntity } from 'src/common/entities/BaseTime.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { InternalUser } from '../../internal-users/entities/internal-user.entity';

@Entity('project_attachments')
export class ProjectAttachment extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project, (project) => project.attachments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  fileName: string;

  @Column()
  fileUrl: string;

  @Column({ type: 'enum', enum: ['PARTNER', 'INTERNAL'], nullable: false })
  uploaderType: 'PARTNER' | 'INTERNAL';

  @ManyToOne(() => Partner, { nullable: false, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'partner_uploader_id' })
  partnerUploader: Partner;
}
