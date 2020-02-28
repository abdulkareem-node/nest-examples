import { Document } from 'mongoose';

export interface Book extends Document {
  readonly name: String;
  readonly type: String;
  readonly author: String;
  readonly publish_year: Number;
}
