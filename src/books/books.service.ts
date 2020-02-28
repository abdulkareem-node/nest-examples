import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import { BookInput } from './inputs/book.input';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: BookInput): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
