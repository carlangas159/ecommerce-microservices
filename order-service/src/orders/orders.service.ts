import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findOne(id: string): Promise<OrderDocument | null> {
    return this.orderModel.findById(id).exec();
  }
} 