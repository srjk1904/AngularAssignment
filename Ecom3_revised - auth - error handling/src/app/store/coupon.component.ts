import { Router } from "@angular/router";

import { Component } from "@angular/core";

import { CouponDiscount } from "../model/coupon.model";

@Component({
  selector: "coupon",

  templateUrl: "coupon.component.html",
})
export class CouponComponent {
  constructor(private router: Router, public discount: CouponDiscount) {}

  navigateToStore() {
    this.router.navigate(["/store"]);
  }

  applyCoupon() {
    this.discount.checkDiscount();
  }
}
