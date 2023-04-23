import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

import { IFilterEntity, IFilters } from 'src/app/shop/interfaces/filters';
import { IProduct } from 'src/app/shop/interfaces/product';
import { ShopService } from 'src/app/shop/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  allProducts!: IProduct[];
  renderProducts!: IProduct[];
  filters!: IFilters;
  breakpoint = 4;
  priceOptions!: Options;
  brands: IFilterEntity[] = [];
  search = '';

  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.shopService.getFilters().subscribe((el) => {
      this.filters = {
        ...el,
        ageCategories: el.ageCategories.map((category) => ({
          ...category,
          checked: true,
        })),
        genderCategories: el.genderCategories.map((category) => ({
          ...category,
          checked: true,
        })),
        originCategories: el.originCategories.map((category) => ({
          ...category,
          checked: true,
        })),
        typeCategories: el.typeCategories.map((typeCategory) => ({
          ...typeCategory,
          checked: true,
          brandCategories: typeCategory.brandCategories.map((brandCategory) => {
            this.pushUniq(this.brands, {
              name: brandCategory.name,
              checked: true,
            });
            return { ...brandCategory, checked: true };
          }),
        })),
      };
      this.priceOptions = {
        floor: el.minProductPrice,
        ceil: el.maxProductPrice,
        step: 1,
        translate: (value: number): string => {
          return value + '₴';
        },
      };
    });
    this.shopService.getAllProducts().subscribe((el) => {
      this.allProducts = el;
      this.renderProducts = el;
    });
  }

  pushUniq(arr: IFilterEntity[], el: IFilterEntity) {
    if (!arr.some((obj) => obj.name === el.name)) arr.push(el);
  }

  onResize(): void {
    if (window.innerWidth < 768) this.breakpoint = 2;
    else if (window.innerWidth < 1070) this.breakpoint = 3;
    else this.breakpoint = 4;
  }

  onFilterChange() {
    this.renderProducts = [];
    this.allProducts.forEach((product) => {
      if (
        this.filters.ageCategories.some(
          (el) =>
            el.checked &&
            product.ageCategory.some((category) => category.name === el.name),
        ) &&
        this.filters.genderCategories.some(
          (el) => el.checked && el.name == product.genderCategory.name,
        ) &&
        this.filters.originCategories.some(
          (el) => el.checked && el.name == product.originCategory.name,
        ) &&
        this.filters.typeCategories.some(
          (el) => el.checked && el.name == product.typeCategory.name,
        ) &&
        this.brands.some(
          (el) => el.checked && el.name == product.brandCategory.name,
        ) &&
        this.filters.minProductPrice <= product.price &&
        this.filters.maxProductPrice >= product.price &&
        product.name.toLowerCase().includes(this.search.toLowerCase())
      )
        this.renderProducts.push(product);
    });
  }

  onTypeChange(): void {
    this.brands = [];
    this.filters.typeCategories.map((type) => {
      if (type.checked)
        type.brandCategories.map((brand) => this.pushUniq(this.brands, brand));
    });
    this.onFilterChange();
  }
}
