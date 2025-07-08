import { Injectable } from '@nestjs/common';
import { CreateKResourceDto } from './dto/create-k-resource.dto';
import { UpdateKResourceDto } from './dto/update-k-resource.dto';

@Injectable()
export class KResourcesService {
  create(createKResourceDto: CreateKResourceDto) {
    return 'This action adds a new kResource';
  }

  findAll() {
    return `This action returns all kResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kResource`;
  }

  update(id: number, updateKResourceDto: UpdateKResourceDto) {
    return `This action updates a #${id} kResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} kResource`;
  }
}
