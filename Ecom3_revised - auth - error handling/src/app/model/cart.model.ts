import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;
  public discountPrice: number = 0;
  public discountAmount: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(product, quantity));
    }
    this.recalculate();
  }

  updateQuantity(product: Product, quantity: any) {
    let line = this.lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.quantity = Number(quantity.target.value);
    }
    this.recalculate();
  }

  removeLine(id?: number) {
    let index = this.lines.findIndex((line) => line.product.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  // calculateDiscount() {
  //   let totalBeforeDiscount = this.cartPrice;
  //   this.discountAmount = 0.1 * totalBeforeDiscount;
  //   this.discountPrice = totalBeforeDiscount - this.discountAmount;
  // }

  public recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.discountAmount=0;
    this.discountPrice=0;
    this.lines.forEach((l) => {
      this.itemCount += l.quantity;
      this.cartPrice += l.quantity * l.lineTotal;
      let totalBeforeDiscount = this.cartPrice;
      this.discountAmount = 0.1 * totalBeforeDiscount;
      this.discountPrice = totalBeforeDiscount - this.discountAmount;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public quantity: number) {}

  get lineTotal() {
    return this.quantity * (this.product.price ?? 0);
  }
}
