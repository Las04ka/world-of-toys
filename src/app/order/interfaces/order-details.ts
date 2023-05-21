export interface IOrderDetails {
  recipientDto: {
    firstname: string;
    patronymic: string;
    lastname: string;
    countryCode: string;
    phoneNumber: number;
  };
  addressDto: {
    country: string;
    settlement: string;
    street: string;
    buildingNumber: number;
    flatNumber: number | null;
    region: string;
  };
  shippingOptionDto: {
    shippingType: string;
    shippingMethod: string;
  };
}
