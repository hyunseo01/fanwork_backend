import { PartialType } from '@nestjs/mapped-types';
import { CreateKResourceDto } from './create-k-resource.dto';

export class UpdateKResourceDto extends PartialType(CreateKResourceDto) {}
