import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from './commands/create-order.command';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly ordersService: OrdersService,
  ) {}

  @Post()
  async createOrder(@Body() createOrderDto: any) {
    const command = new CreateOrderCommand(
      createOrderDto.userId,
      createOrderDto.items,
      createOrderDto.total,
    );
    return this.commandBus.execute(command);
  }

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    const order = await this.ordersService.findOne(id);
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }
} 