import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

export enum PartnerEntityType {
  ORGANIZATION = 'Organizations',
  INDIVIDUAL = 'Individuals',
}

export enum PartnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum RegistrationType {
  INTERNAL = 'INTERNAL',
  APPLIED = 'APPLIED',
}

@Entity('partners')
export class Partner extends BaseTimeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number; // PK

  @Column({ unique: true })
  email: string; // 로그인 이메일

  @Column()
  passwordHash: string; // 해시된 비밀번호

  @Column({ type: 'enum', enum: PartnerEntityType })
  entityType: PartnerEntityType; // 개인 or 법인

  @Column({ length: 20 })
  displayName: string; // 표시 이름 (닉네임)

  @Column({ type: 'enum', enum: PartnerStatus })
  status: PartnerStatus; // 계정 활성 상태

  @Column({ nullable: true, length: 20 })
  businessRegistrationNumber: string; // 사업자등록번호 (optional)

  @Column({ type: 'jsonb', nullable: true })
  primaryContacts: any; // 주요 연락처 정보

  @Column({ type: 'text', nullable: true })
  description: string; // 설명

  @Column({ type: 'jsonb', nullable: true })
  details: any; // 상세 정보

  @Column({ type: 'simple-array' })
  accountRoles: string[]; // 역할 목록 (예: 담당자, 결제자 등)

  @Column({ default: false })
  isKeyPlayer: boolean; // 주요 의사결정자 여부

  @Column({ length: 2 })
  countryCode: string; // 국가 코드

  @Column({ type: 'enum', enum: RegistrationType })
  registrationType: RegistrationType; // 등록 유형 (내부/지원)

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date; // 마지막 로그인 시각

  @Column({ nullable: true })
  website: string; // 홈페이지 URL
}
