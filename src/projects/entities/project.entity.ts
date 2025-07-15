import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Partner } from 'src/partners/entities/partner.entity';
import { InternalUser } from 'src/internal-users/entities/internal-user.entity';
import { BaseTimeEntity } from 'src/common/entities/BaseTime.entity';
import { ProjectParticipant } from 'src/project-participants/entities/project-participant.entity';
import { ProjectAttachment } from './project_attachments.entity';

export enum ProjectStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  IN_REVIEW = 'IN_REVIEW',
  PROPOSAL_SENT = 'PROPOSAL_SENT',
  CONTRACT_NEGOTIATION = 'CONTRACT_NEGOTIATION',
  TASK_IN_PROGRESS = 'TASK_IN_PROGRESS',
  DELIVERED = 'DELIVERED',
  REVISION = 'REVISION',
  RE_DELIVERED = 'RE-DELIVERED',
  PENDING_SETTLEMENT = 'PENDING_SETTLEMENT',
  COMPLETED = 'COMPLETED',
}

@Entity('projects')
export class Project extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Partner, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'payer_account_id' })
  payerAccount: Partner; // 비용 지불자 (파트너 계정)

  @Column()
  title: string; // 프로젝트 제목

  @Column()
  requestType: string; // 요청 유형 (예: CONTENT_INTERVIEW)

  @Column({ type: 'timestamp' })
  requestAt: Date; // 요청 시점

  @Column({ type: 'enum', enum: ProjectStatus })
  status: ProjectStatus; // 현재 상태

  @Column({ type: 'jsonb', nullable: true })
  progressCount: any; // 상태별 진행 카운트 (선택적)

  @Column({ type: 'jsonb' })
  requestDetails: any; // 요청 상세 정보

  @OneToMany(() => ProjectAttachment, (file) => file.project)
  attachments: ProjectAttachment[]; // 첨부 파일 리스트

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by_user_id' })
  creator: Partner; // 프로젝트 생성자

  @ManyToOne(() => InternalUser, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'manager_id' })
  manager: InternalUser; // 내부 관리자 담당자

  @OneToMany(() => ProjectParticipant, (participant) => participant.project)
  participants: ProjectParticipant[]; // 참여자 리스트
}
