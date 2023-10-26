import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@Component({
  templateUrl: "checkout.component.html",
  styleUrls: ["checkout.component.css"],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;

  errorMessage: any;

  constructor(public repository: OrderRepository, public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository
        .saveOrder(this.order)

        .subscribe(
          (order) => {
            this.order.clear();
            this.orderSent = true;
            this.submitted = false;
          }
          /* ,
          (error) => {
            //Error callback
            console.error("error caught in component");
            this.errorMessage = error;
            console.log(this.errorMessage);
            //throw error;   //You can also throw the error to a global error handler
          } */
        );
    }
  }
}
