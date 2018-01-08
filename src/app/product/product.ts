export class Product {

    id: number;
    name: string;
    description: string;
    min_Price: number;
    max_Price: number;
    constructor( id: number, name: string, description: string, min_price: number, max_price: number){
      this.id = id;
      this.name = name;
      this.description = description;
      this.min_Price = min_price;
      this.max_Price = max_price;
    }
  }
