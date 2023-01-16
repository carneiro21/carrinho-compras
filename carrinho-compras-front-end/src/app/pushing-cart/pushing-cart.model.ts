export interface Product {
    name: string;
    description: string;
    amount: number;
    oldAmount: number;
    imgPath: string;
    price: number;
 }

 export interface PushingCart {
    productsList: Array<Product>;
    totalPrice: number;
    ticket:string;
 }
  