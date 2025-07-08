import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../../projects/entities/project.entity';
import { BaseTimeEntity } from '../../common/entities/BaseTime.entity';

@Entity('chats')
export class Chat extends BaseTimeEntity {
  @PrimaryGeneratedColumn()
  id: number; // PK

  @ManyToOne(() => Project, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'project_id' })
  project: Project; // 연결된 프로젝트

  @Column({ name: 'commenter_id', type: 'bigint', nullable: true })
  commenterId: number | null; // 작성자 ID (내부관리자 또는 파트너)

  @Column({
    name: 'commenter_type',
    type: 'enum',
    enum: ['INTERNAL', 'ACCOUNT'],
    nullable: true,
  })
  commenterType: 'INTERNAL' | 'ACCOUNT'; // 작성자 유형

  @Column({ type: 'text' })
  body: string; // 메시지 내용
}
