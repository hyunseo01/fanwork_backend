import { Injectable } from '@nestjs/common';
import { CreateFanbaseDto } from './dto/create-fanbase.dto';
import { UpdateFanbaseDto } from './dto/update-fanbase.dto';

@Injectable()
export class FanbaseService {
  create(createFanbaseDto: CreateFanbaseDto) {
    return 'This action adds a new fanbase';
  }

  findAll() {
    return `This action returns all fanbase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fanbase`;
  }

  update(id: number, updateFanbaseDto: UpdateFanbaseDto) {
    return `This action updates a #${id} fanbase`;
  }

  remove(id: number) {
    return `This action removes a #${id} fanbase`;
  }
}
