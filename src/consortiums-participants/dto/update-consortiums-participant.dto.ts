import { PartialType } from '@nestjs/swagger';
import { CreateConsortiumsParticipantDto } from './create-consortiums-participant.dto';

export class UpdateConsortiumsParticipantDto extends PartialType(CreateConsortiumsParticipantDto) {}
