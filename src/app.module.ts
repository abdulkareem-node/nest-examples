import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from "./cats/cats.module";
import { BooksModule } from "./books/books.module";

@Module({
  imports: [
    CatsModule,
    BooksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/abd_demo', {useNewUrlParser: true, useUnifiedTopology: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
