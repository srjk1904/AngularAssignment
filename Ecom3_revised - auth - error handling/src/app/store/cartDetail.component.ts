import { Component } from "@angular/core";

import { Cart } from "../model/cart.model";

import { CouponDiscount } from "../model/coupon.model";

@Component({
  templateUrl: "cartDetail.component.html",
})
export class CartDetailComponent {
  constructor(public cart: Cart, public coupon: CouponDiscount) {}

  public isdiscountapplied: boolean = false;

  applyDiscount() {
    if (this.coupon.isCouponApplied == true) {
      this.isdiscountapplied = true;
    }
  }
}
