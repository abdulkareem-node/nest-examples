import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookInput } from './inputs/book.input';

@Resolver()
export class BooksResolver {
  constructor(
    private readonly booksService: BooksService,
  ) {}

  @Query(() => [CreateBookDto])
  async books() {
    return this.booksService.findAll();
  }

  @Mutation(() => CreateBookDto)
  async createBook(@Args('input') input: BookInput) {
    return this.booksService.create(input);
  }
}
