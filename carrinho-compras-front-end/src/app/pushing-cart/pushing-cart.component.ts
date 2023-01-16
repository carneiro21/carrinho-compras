import { Product } from './pushing-cart.model';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Component({
  selector: 'app-pushing-cart',
  templateUrl: './pushing-cart.component.html',
  styleUrls: ['./pushing-cart.component.css']
})
export class PushingCartComponent implements OnInit{


  productsList: Array<Product> = new Array<Product>();

  productsOrderList: Array<Product> = new Array<Product>();

  data$ = new BehaviorSubject<Array<Product>>(new Array<Product>());

  displayedColumns: string[] = ['name', 'price', 'amount'];

  valueOrderFinal: number = 0;

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(): void {

    const refrigerator = {
      name: "Geladeira Samsung",
      description: "",
      amount: 0,
      imgPath: "assets/img/geladeira.jfif",
      price: 3999
    } as Product

    const videogame = {
      name: "Video Game Playstation 5",
      description: "",
      amount: 0,
      imgPath: "assets/img/videogame.webp",
      price: 5200
    } as Product

    const television = {
      name: "Televisão Samsung QLED 65 Polegadas",
      description: "",
      amount: 0,
      imgPath: "assets/img/televisao.webp",
      price: 4797
    } as Product

    const cellPhone = {
      name: "Iphone 14 Pro Max (128GB)",
      description: "",
      amount: 0,
      imgPath: "assets/img/iphone14.jpeg",
      price: 8632
    } as Product

    const airfryer  = {
      name: "Fritadeira Elétrica - Airfryer High Connect - Philips",
      description: "",
      amount: 0,
      imgPath: "assets/img/fritadeira.webp",
      price: 1439
    } as Product

    const phones  = {
      name: "Fones de Ouvido Beats Studio 3",
      description: "",
      amount: 0,
      imgPath: "assets/img/fone.webp",
      price: 1900
    } as Product

    this.productsList.push(refrigerator);
    this.productsList.push(videogame);
    this.productsList.push(television);
    this.productsList.push(cellPhone);
    this.productsList.push(airfryer);
    this.productsList.push(phones);

  }

  sumAmount(product: Product): void {
    if (product.amount >= 0){
        product.amount += 1;
        this.valueOrderFinal += product.price;

        if (this.productsOrderList.indexOf(product) < 0) {
          this.productsOrderList.push(product);
        }

        this.data$.next(this.productsOrderList);
    }
  }

  reduceAmount(product: Product): void {
    if (product.amount < 1){
        product.amount = 0;
    }else {
      product.amount -= 1;
      this.valueOrderFinal -= product.price;
      
      if (this.valueOrderFinal < 0) {
        this.valueOrderFinal = 0;
      }
    }

    if (product.amount <= 0){
      const index = this.productsOrderList.indexOf(product);
      this.productsOrderList.splice(index, 1);   
      this.data$.next(this.productsOrderList);
    }
  }
  
}
