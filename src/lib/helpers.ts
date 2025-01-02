interface ProductData {
    title: string;
    description: string;
    price: number;
}

export function getCartSubTotal(cartItems: ProductData[]): number { 
    if (cartItems.length === 0) {
      return 0
    }
    else {
      let totalPrice = 0
      cartItems.forEach(item => totalPrice += item.price)
      return totalPrice
    }
  }