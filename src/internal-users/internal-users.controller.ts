import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InternalUsersService } from './internal-users.service';
import { CreateInternalUserDto } from './dto/create-internal-user.dto';
import { UpdateInternalUserDto } from './dto/update-internal-user.dto';

@Controller('internal-users')
export class InternalUsersController {
  constructor(private readonly internalUsersService: InternalUsersService) {}

  @Post()
  create(@Body() createInternalUserDto: CreateInternalUserDto) {
    return this.internalUsersService.create(createInternalUserDto);
  }

  @Get()
  findAll() {
    return this.internalUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.internalUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInternalUserDto: UpdateInternalUserDto) {
    return this.internalUsersService.update(+id, updateInternalUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.internalUsersService.remove(+id);
  }
}
