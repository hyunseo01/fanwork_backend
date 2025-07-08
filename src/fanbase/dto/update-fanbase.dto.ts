import { PartialType } from '@nestjs/mapped-types';
import { CreateFanbaseDto } from './create-fanbase.dto';

export class UpdateFanbaseDto extends PartialType(CreateFanbaseDto) {}
