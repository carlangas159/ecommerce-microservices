export class CreateOrderCommand {
  constructor(
    public readonly userId: string,
    public readonly items: Array<{
      productId: string;
      quantity: number;
      price: number;
    }>,
    public readonly total: number,
  ) {}
} 