import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninInternalDto } from './dto/signin-internal.dto';
import { Request } from 'express';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  InternalUser,
  InternalUserStatus,
} from '../internal-users/entities/internal-user.entity';
import { GetAdminsQueryDto } from './dto/get-admins-query.dto';
import { AdminListResponseDto } from './dto/admin-list-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(InternalUser)
    private readonly internalUserRepo: Repository<InternalUser>,
  ) {}

  async signinInternal(dto: SigninInternalDto, req: Request) {
    const internalUser = await this.internalUserRepo.findOne({
      where: { email: dto.email },
    });

    if (!internalUser) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.',
      );
    }

    const isPasswordMatch = await bcrypt.compare(
      dto.password,
      internalUser.passwordHash,
    );
    if (!isPasswordMatch) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 올바르지 않습니다.',
      );
    }

    if (internalUser.status === InternalUserStatus.INACTIVE) {
      throw new ForbiddenException('비활성화된 관리자 계정입니다.');
    }

    req.session.user = {
      id: internalUser.id,
      name: internalUser.name,
      role: internalUser.role,
      isFirstLogin: !internalUser.lastLoginAt,
    };

    internalUser.lastLoginAt = new Date();
    await this.internalUserRepo.save(internalUser);

    return {
      id: internalUser.id,
      name: internalUser.name,
      role: internalUser.role,
      isFirstLogin: !internalUser.lastLoginAt,
    };
  }

  async getMyInfo(id: number) {
    const user = await this.internalUserRepo.findOne({ where: { id } });
    if (!user) throw new UnauthorizedException('로그인이 필요합니다.');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.status === InternalUserStatus.ACTIVE,
      isFirstLogin: !user.lastLoginAt,
      lastLoginAt: user.lastLoginAt,
    };
  }

  async getAdmins(query: GetAdminsQueryDto): Promise<AdminListResponseDto> {
    const page = Number(query.page || 1);
    const limit = Number(query.limit || 20);
    const offset = (page - 1) * limit;

    const qb = this.internalUserRepo
      .createQueryBuilder('user')
      .where('user.isDeleted = false');

    if (query.role) {
      qb.andWhere('user.role = :role', { role: query.role });
    }

    if (query.isActive !== undefined) {
      qb.andWhere('user.status = :status', {
        status: query.isActive === 'true' ? 'ACTIVE' : 'INACTIVE',
      });
    }

    if (query.keyword) {
      qb.andWhere('(user.name LIKE :keyword OR user.email LIKE :keyword)', {
        keyword: `%${query.keyword}%`,
      });
    }

    qb.leftJoinAndSelect('user.projects', 'project');

    if (query.projectStatus) {
      qb.andWhere('project.status = :status', { status: query.projectStatus });
    } else {
      qb.andWhere('project.status IN (:...statuses)', {
        statuses: [
          'DRAFT',
          'SUBMITTED',
          'IN_REVIEW',
          'PROPOSAL_SENT',
          'CONTRACT_NEGOTIATION',
          'TASK_IN_PROGRESS',
          'PENDING_SETTLEMENT',
        ],
      });
    }

    qb.skip(offset).take(limit);

    const [items, total] = await qb.getManyAndCount();

    return {
      total,
      page,
      limit,
      items: items.map((u) => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        isActive: u.status === InternalUserStatus.ACTIVE,
        createdAt: u.createdAt.toISOString(),
        lastLoginAt: u.lastLoginAt?.toISOString() ?? null,
        projects:
          u.projects?.map((p) => ({
            id: p.id,
            title: p.title,
            status: p.status,
          })) ?? [],
      })),
    };
  }
}
