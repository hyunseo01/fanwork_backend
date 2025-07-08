import { Module } from '@nestjs/common';
import { ConsortiumsParticipantsService } from './consortiums-participants.service';
import { ConsortiumsParticipantsController } from './consortiums-participants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsortiumParticipant } from './entities/consortiums-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsortiumParticipant])],
  controllers: [ConsortiumsParticipantsController],
  providers: [ConsortiumsParticipantsService],
})
export class ConsortiumsParticipantsModule {}
