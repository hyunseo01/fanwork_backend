import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsortiumsParticipantsService } from './consortiums-participants.service';
import { CreateConsortiumsParticipantDto } from './dto/create-consortiums-participant.dto';
import { UpdateConsortiumsParticipantDto } from './dto/update-consortiums-participant.dto';

@Controller('consortiums-participants')
export class ConsortiumsParticipantsController {
  constructor(private readonly consortiumsParticipantsService: ConsortiumsParticipantsService) {}

  @Post()
  create(@Body() createConsortiumsParticipantDto: CreateConsortiumsParticipantDto) {
    return this.consortiumsParticipantsService.create(createConsortiumsParticipantDto);
  }

  @Get()
  findAll() {
    return this.consortiumsParticipantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consortiumsParticipantsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsortiumsParticipantDto: UpdateConsortiumsParticipantDto) {
    return this.consortiumsParticipantsService.update(+id, updateConsortiumsParticipantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consortiumsParticipantsService.remove(+id);
  }
}
