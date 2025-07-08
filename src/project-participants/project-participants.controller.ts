import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectParticipantsService } from './project-participants.service';
import { CreateProjectParticipantDto } from './dto/create-project-participant.dto';
import { UpdateProjectParticipantDto } from './dto/update-project-participant.dto';

@Controller('project-participants')
export class ProjectParticipantsController {
  constructor(private readonly projectParticipantsService: ProjectParticipantsService) {}

  @Post()
  create(@Body() createProjectParticipantDto: CreateProjectParticipantDto) {
    return this.projectParticipantsService.create(createProjectParticipantDto);
  }

  @Get()
  findAll() {
    return this.projectParticipantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectParticipantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectParticipantDto: UpdateProjectParticipantDto) {
    return this.projectParticipantsService.update(+id, updateProjectParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectParticipantsService.remove(+id);
  }
}
