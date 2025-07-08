import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FanbaseService } from './fanbase.service';
import { CreateFanbaseDto } from './dto/create-fanbase.dto';
import { UpdateFanbaseDto } from './dto/update-fanbase.dto';

@Controller('fanbase')
export class FanbaseController {
  constructor(private readonly fanbaseService: FanbaseService) {}

  @Post()
  create(@Body() createFanbaseDto: CreateFanbaseDto) {
    return this.fanbaseService.create(createFanbaseDto);
  }

  @Get()
  findAll() {
    return this.fanbaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fanbaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFanbaseDto: UpdateFanbaseDto) {
    return this.fanbaseService.update(+id, updateFanbaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fanbaseService.remove(+id);
  }
}
