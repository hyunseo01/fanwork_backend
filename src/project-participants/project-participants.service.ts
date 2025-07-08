import { Injectable } from '@nestjs/common';
import { CreateProjectParticipantDto } from './dto/create-project-participant.dto';
import { UpdateProjectParticipantDto } from './dto/update-project-participant.dto';

@Injectable()
export class ProjectParticipantsService {
  create(createProjectParticipantDto: CreateProjectParticipantDto) {
    return 'This action adds a new projectParticipant';
  }

  findAll() {
    return `This action returns all projectParticipants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectParticipant`;
  }

  update(id: number, updateProjectParticipantDto: UpdateProjectParticipantDto) {
    return `This action updates a #${id} projectParticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectParticipant`;
  }
}
