import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class BookInput {
  @Field()
  readonly name: String;
  @Field()
  readonly type: String;
  @Field()
  readonly author: String;
  @Field(() => Int)
  readonly publish_year: Number;
}
