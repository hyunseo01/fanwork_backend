import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KResourcesService } from './k-resources.service';
import { CreateKResourceDto } from './dto/create-k-resource.dto';
import { UpdateKResourceDto } from './dto/update-k-resource.dto';

@Controller('k-resources')
export class KResourcesController {
  constructor(private readonly kResourcesService: KResourcesService) {}

  @Post()
  create(@Body() createKResourceDto: CreateKResourceDto) {
    return this.kResourcesService.create(createKResourceDto);
  }

  @Get()
  findAll() {
    return this.kResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKResourceDto: UpdateKResourceDto) {
    return this.kResourcesService.update(+id, updateKResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kResourcesService.remove(+id);
  }
}
