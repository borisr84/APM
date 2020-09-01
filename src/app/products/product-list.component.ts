import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[] = [];
    
  constructor(private productService: ProductService) {
        //this._listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void
  {
    this.productService.getProducts().subscribe({
      next: products => 
      {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  onRatingClicked(message: string): void
  {
    this.pageTitle = `Product List: ${message}`;
  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(value) : this.products;
  }

  performFilter(filter: string) : IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1);
  }

}
