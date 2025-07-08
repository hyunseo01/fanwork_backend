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

  // 분기처리 파일 업로더가 관리자가 될수도 있고 파트너가 될 수도 있는데 그럴 경우에는 둘중 하나가 비워져야함
  @ManyToOne(() => Partner, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'partner_uploader_id' })
  partnerUploader: Partner | null;

  @ManyToOne(() => InternalUser, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'internal_uploader_id' })
  internalUploader: InternalUser | null;
}
