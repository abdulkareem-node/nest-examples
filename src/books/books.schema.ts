import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: String,
  type: String,
  author: String,
  publish_year: Number,
});
