import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndividualsService } from './individuals.service';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';

@Controller('individuals')
export class IndividualsController {
  constructor(private readonly individualsService: IndividualsService) {}

  @Post()
  create(@Body() createIndividualDto: CreateIndividualDto) {
    return this.individualsService.create(createIndividualDto);
  }

  @Get()
  findAll() {
    return this.individualsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.individualsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIndividualDto: UpdateIndividualDto) {
    return this.individualsService.update(+id, updateIndividualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.individualsService.remove(+id);
  }
}
