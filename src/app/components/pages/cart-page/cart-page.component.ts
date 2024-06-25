import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart: any[] = [];  // Replace this with your actual cart data structure

  constructor() { }

  ngOnInit(): void {
    // Load cart data from a service or local storage
    this.loadCart();
  }

  loadCart() {
    // This is where you would load your cart data, for example:
    // this.cart = this.cartService.getCartItems();
    // For this example, we'll assume the cart is empty
    this.cart = [];
  }

  isCartEmpty(): boolean {
    return this.cart.length === 0;
  }
}
