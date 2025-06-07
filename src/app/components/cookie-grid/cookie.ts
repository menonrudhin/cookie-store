export class Cookie {
  constructor(
    public name: string,
    public imageUrl: string,
    public price: number,
    public description: string
  ) {}

  get formattedPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }
}