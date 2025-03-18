import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from '../commands/create-order.command';
import { OrderCreatedEvent } from '../events/order-created.event';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from '../models/order.model';

@CommandHandler(CreateOrderCommand)
export class CreateOrderHandler implements ICommandHandler<CreateOrderCommand> {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private eventBus: EventBus,
  ) {}

  async execute(command: CreateOrderCommand): Promise<Order> {
    const order = new this.orderModel({
      userId: command.userId,
      items: command.items,
      total: command.total,
      status: 'PENDING',
    });

    const savedOrder = await order.save();

    await this.eventBus.publish(
      new OrderCreatedEvent(
        savedOrder._id.toString(),
        savedOrder.userId,
        savedOrder.items,
        savedOrder.total,
        savedOrder.status,
        savedOrder.createdAt,
      ),
    );

    return savedOrder;
  }
} 