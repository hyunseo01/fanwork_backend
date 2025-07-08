import { PartialType } from '@nestjs/swagger';
import { CreateProjectParticipantDto } from './create-project-participant.dto';

export class UpdateProjectParticipantDto extends PartialType(CreateProjectParticipantDto) {}
