import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` - ${id}`;
    this.productService.getProductById(id).subscribe({
      next: product => 
      {
        if (product !== null && product !== undefined)
        {
          this.product = {
            'productId' : id,
            'productName' : product.productName,
            'productCode' : product.productCode,
            'releaseDate' : product.releaseDate,
            'description' : product.description,
            'price' : product.price,
            'starRating' : product.starRating,
            'imageUrl' : product.imageUrl}
        }
        else
        {
          this.errorMessage = `Product not found`;
        }
      },
      error: err => this.errorMessage = err
    });
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
