import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { KResource } from '../../k-resources/entities/k-resource.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

export enum Platform {
  TWITTER = 'TWITTER',
  INSTAGRAM = 'INSTAGRAM',
  YOUTUBE = 'YOUTUBE',
  TIKTOK = 'TIKTOK',
  REDDIT = 'REDDIT',
  ONLINE_FORUM = 'ONLINE_FORUM',
}

export enum AccountSpecialty {
  NEWS_UPDATE = 'NEWS_UPDATE',
  TRANSLATION = 'TRANSLATION',
  PHOTO_ARCHIVE = 'PHOTO_ARCHIVE',
  GROUP_ORDER = 'GROUP_ORDER',
  FAN_ART = 'FAN_ART',
}

export enum RelationshipStatus {
  FRIENDLY = 'FRIENDLY',
  UNKNOWN = 'UNKNOWN',
}

@Entity('fanbase_infos')
export class FanbaseInfo extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // 팬베이스 고유 식별자

  @ManyToOne(() => KResource, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'k_resource_id' })
  kResource: KResource; // 연관된 리소스

  @Column({ type: 'enum', enum: Platform })
  platform: Platform; // 활동하는 플랫폼

  @Column({ length: 255 })
  account_name: string; // 계정 이름 또는 핸들

  @Column({ length: 255, unique: true })
  account_url: string; // 계정 URL

  @Column()
  followers: number; // 팔로워 또는 구독자 수

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  avg_engagement_rate: number | null; // 참여율 (%)

  @Column({ type: 'enum', enum: AccountSpecialty })
  account_specialty: AccountSpecialty; // 활동 유형

  @Column({ length: 15 })
  primary_language: string; // 주 사용 언어 (ISO 639-1)

  @Column({ type: 'varchar', length: 2, nullable: true })
  country_code: string | null; // 주 활동 국가 (ISO 3166-1 alpha-2)

  @Column({ type: 'enum', enum: RelationshipStatus, nullable: true })
  relationship_status: RelationshipStatus | null; // 소속사 관계

  @Column({ type: 'date' })
  last_checked_at: Date; // 마지막 확인일

  @Column({ type: 'text', nullable: true })
  notes: string | null; // 특이사항
}
