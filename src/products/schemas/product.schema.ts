import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  productName: string;
  @Prop()
  brand: number;
  @Prop()
  price: number;
  @Prop()
  quantity: string;
  @Prop()
  discription: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
