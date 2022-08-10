import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hard')
  get(@Req() req: Request): string {
    const id = (req.query['id'] as string) || 'User is undefined';
    return this.userService.getById(id).name;
  }

  @Get('easier')
  getEasier(@Query('id') id: string) {
    return this.userService.getById(id).name;
  }

  @Get(':id')
  getCorrect(@Param('id') id: string) {
    return this.userService.getById(id).name;
  }
}
