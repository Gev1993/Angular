export class Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public imgUrl: string;
  public category: string;

  constructor(id: number, title: string, description: string, price: number, imgUrl: string, category: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.category = category;
  }
}
