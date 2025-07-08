import { PartialType } from '@nestjs/mapped-types';
import { CreateInternalUserDto } from './create-internal-user.dto';

export class UpdateInternalUserDto extends PartialType(CreateInternalUserDto) {}
