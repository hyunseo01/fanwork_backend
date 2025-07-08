import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Partner } from 'src/partners/entities/partner.entity';
import { InternalUser } from 'src/internal-users/entities/internal-user.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

export enum ContractType {
  ONE_TIME_PROJECT = 'ONE_TIME_PROJECT',
  RETAINER = 'RETAINER',
  IP_ROYALTY = 'IP_ROYALTY',
}

export enum ContractStatus {
  DRAFT = 'DRAFT',
  SENT_TO_PARTNER = 'SENT_TO_PARTNER',
  SIGNED = 'SIGNED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  TERMINATED = 'TERMINATED',
}

@Entity('contracts')
export class Contract extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Project, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project: Project; // 연결된 프로젝트

  @Column({ name: 'contract_title', length: 255 })
  contractTitle: string; // 계약 제목

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'primary_account_id' })
  primaryAccount: Partner; // 계약 주체 (대표 파트너)

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'payer_account_id' })
  payerAccount: Partner; // 실제 비용 지불 파트너

  @ManyToOne(() => Partner, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'provider_account_id' })
  providerAccount: Partner; // 서비스 제공 파트너

  @Column({
    name: 'contract_type',
    type: 'enum',
    enum: ContractType,
  })
  contractType: ContractType; // 계약 유형

  @Column({
    name: 'contract_status',
    type: 'enum',
    enum: ContractStatus,
  })
  contractStatus: ContractStatus; // 계약 상태

  @Column({
    name: 'total_value_usd',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  totalValueUsd: number; // 총 계약 금액 (USD)

  @Column({ length: 3 })
  currency: string; // 통화 (예: USD, KRW)

  @Column({ name: 'contract_date', type: 'date', nullable: true })
  contractDate: Date; // 계약 서명일

  @Column({ name: 'effective_start_date', type: 'date' })
  effectiveStartDate: Date; // 계약 효력 시작일

  @Column({ name: 'effective_end_date', type: 'date' })
  effectiveEndDate: Date; // 계약 효력 종료일

  @Column({ name: 'contract_document_url', length: 255 })
  contractDocumentUrl: string; // 계약서 파일 URL

  @ManyToOne(() => InternalUser, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'created_by' })
  createdBy: InternalUser; // 계약 등록자 (내부 관리자)
}
