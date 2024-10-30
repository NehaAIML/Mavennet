import { Controller, Get } from '@nestjs/common';
import * as data from '../database.json';

@Controller('albums')
export class AlbumsController {
  @Get()
  findAll() {
    return data.albums;
  }
}
