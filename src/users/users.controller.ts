import { Controller, Get } from '@nestjs/common';
import * as data from '../database.json';


@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return data.users;
  }
}

