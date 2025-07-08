import { Injectable } from '@nestjs/common';
import { CreateInternalUserDto } from './dto/create-internal-user.dto';
import { UpdateInternalUserDto } from './dto/update-internal-user.dto';

@Injectable()
export class InternalUsersService {
  create(createInternalUserDto: CreateInternalUserDto) {
    return 'This action adds a new internalUser';
  }

  findAll() {
    return `This action returns all internalUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} internalUser`;
  }

  update(id: number, updateInternalUserDto: UpdateInternalUserDto) {
    return `This action updates a #${id} internalUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} internalUser`;
  }
}
