import { Controller, Get, Param } from '@nestjs/common';
import data from '../database.json';

@Controller('photos')
export class PhotosController {
  @Get()
  findAll() {
    return data.photos;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return data.photos.find(photo => photo.id === +id);
  }
}

