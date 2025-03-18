export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly items: Array<{
      productId: string;
      quantity: number;
      price: number;
    }>,
    public readonly total: number,
    public readonly status: string,
    public readonly createdAt: Date,
  ) {}
} 