export interface IOrder {
  totalPrice: number;
  dateTime: string;
  status: string;
  shippingOption: {
    shippingType: string;
    shippingMethod: string;
    price: number;
  };
}
