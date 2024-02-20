import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  @Post()
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() body: any) {
    console.log(body);
  }
}
