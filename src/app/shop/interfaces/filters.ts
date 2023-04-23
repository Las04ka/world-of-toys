export interface IFilterEntity {
  name: string;
  checked: boolean;
}

interface ITypeCategory {
  name: string;
  checked: boolean;
  brandCategories: IFilterEntity[];
}

export interface IFilters {
  minProductPrice: number;
  maxProductPrice: number;
  ageCategories: IFilterEntity[];
  genderCategories: IFilterEntity[];
  originCategories: IFilterEntity[];
  typeCategories: ITypeCategory[];
}
