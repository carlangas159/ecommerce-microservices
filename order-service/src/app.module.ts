import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { CreateOrderHandler } from './orders/handlers/create-order.handler';
import { Order, OrderSchema } from './orders/models/order.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://admin:password123@localhost:27017/ecommerce?authSource=admin'),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    CqrsModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, CreateOrderHandler],
})
export class AppModule {} 