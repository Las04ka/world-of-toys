export interface ICategory {
  name: string;
}

export interface IProduct {
  name: string;
  slug: string;
  description: string;
  image: string;
  price: number;
  originCategory: ICategory;
  genderCategory: ICategory;
  brandCategory: ICategory;
  typeCategory: ICategory;
  ageCategory: ICategory[];
}
