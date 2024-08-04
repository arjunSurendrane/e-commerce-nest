import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly productName: string;
  readonly brand: number;
  readonly price: number;
  readonly quantity: string;
  readonly discription: number;
}
