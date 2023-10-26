import { Injectable } from "@angular/core";

@Injectable()
export class CouponDiscount {
  public isCouponApplied: any = false;

  checkDiscount() {
    this.isCouponApplied = true;
    console.log("coupon is applied", this.isCouponApplied);
  }
}
