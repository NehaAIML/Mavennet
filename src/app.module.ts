import { Module } from '@nestjs/common';
import { AlbumModule } from './albums/album.module';
import { UsersModule } from './users/users.module';
import { PhotosModule } from './photos/photos.module';
import { AppController } from './app.controller';

@Module({
  imports: [AlbumModule, UsersModule, PhotosModule],
  controllers: [AppController],
})
export class AppModule {}
