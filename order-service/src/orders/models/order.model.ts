import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  _id: Types.ObjectId;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true, enum: ['PENDING', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED'] })
  status: string;

  @Prop({ type: [{ productId: String, quantity: Number, price: Number }] })
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;

  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order); 