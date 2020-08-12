export class Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public imgUrl: string;

  constructor(id: number, title: string, description: string, price: number, imgUrl: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}
