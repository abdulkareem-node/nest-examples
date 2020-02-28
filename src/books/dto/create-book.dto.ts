import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreateBookDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: String;
  @Field()
  readonly type: String;
  @Field()
  readonly author: String;
  @Field(() => Int)
  readonly publish_year: Number;
}
