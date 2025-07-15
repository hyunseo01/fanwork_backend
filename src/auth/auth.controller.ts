import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninInternalDto } from './dto/signin-internal.dto';
import { Request } from 'express';
import { SessionAuthGuard } from '../common/guards/session-auth.guard';
import { AuthenticatedRequest } from '../common/types/authenticated-request';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { GetAdminsQueryDto } from './dto/get-admins-query.dto';
import { AdminListResponseDto } from './dto/admin-list-response.dto';

@Controller('api/internals')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signinInternal(@Body() dto: SigninInternalDto, @Req() req: Request) {
    const result = await this.authService.signinInternal(dto, req);

    return {
      message: '로그인 성공',
      data: result,
    };
  }

  @UseGuards(SessionAuthGuard)
  @Get('me')
  async getMyInfo(@Req() req: AuthenticatedRequest) {
    const result = await this.authService.getMyInfo(req.session.user!.id);
    return {
      message: '내 정보 조회 성공',
      data: result,
    };
  }

  @UseGuards(SessionAuthGuard, RolesGuard)
  @Roles('OPERATOR')
  @Get()
  async getAdmins(
    @Query() query: GetAdminsQueryDto,
  ): Promise<{ message: string; data: AdminListResponseDto }> {
    const result = await this.authService.getAdmins(query);
    return {
      message: '관리자 목록 조회 성공',
      data: result,
    };
  }
}
