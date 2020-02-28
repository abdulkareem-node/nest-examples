import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './books.schema';
import { BooksService } from './books.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  providers: [BooksResolver, BooksService],
})
export class BooksModule {}
