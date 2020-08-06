import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsController } from './blogs/blogs.controller';
import { BlogService } from './services/blog/blog.service';

@Module({
  imports: [],
  controllers: [AppController, BlogsController],
  providers: [AppService, BlogService],
})
export class AppModule {}
