export class Service {

    id: number;
    name: string;
    type: any;
    productID: any;
    operatorID: any;
    operatorPackageID: string;
    operatorServiceID: string;

    constructor(id: number, name: string, type: any, productID: any, operatorID: any
    , operatorPackageID: string, operatorServiceID: string){
      this.id = id;
      this.name = name;
      this.type = type;
      this.productID = productID;
      this.operatorID = operatorID;
      this.operatorPackageID = operatorPackageID;
      this.operatorServiceID = operatorServiceID;
    }

  }
