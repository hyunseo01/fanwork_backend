import { Module } from '@nestjs/common';
import { ProjectParticipantsService } from './project-participants.service';
import { ProjectParticipantsController } from './project-participants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectParticipant } from './entities/project-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectParticipant])],
  controllers: [ProjectParticipantsController],
  providers: [ProjectParticipantsService],
})
export class ProjectParticipantsModule {}
