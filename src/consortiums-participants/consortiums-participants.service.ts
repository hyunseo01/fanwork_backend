import { Injectable } from '@nestjs/common';
import { CreateConsortiumsParticipantDto } from './dto/create-consortiums-participant.dto';
import { UpdateConsortiumsParticipantDto } from './dto/update-consortiums-participant.dto';

@Injectable()
export class ConsortiumsParticipantsService {
  create(createConsortiumsParticipantDto: CreateConsortiumsParticipantDto) {
    return 'This action adds a new consortiumsParticipant';
  }

  findAll() {
    return `This action returns all consortiumsParticipants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consortiumsParticipant`;
  }

  update(id: number, updateConsortiumsParticipantDto: UpdateConsortiumsParticipantDto) {
    return `This action updates a #${id} consortiumsParticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} consortiumsParticipant`;
  }
}
