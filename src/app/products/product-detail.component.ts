import { Component, OnInit } from '@angular/core';
import { IProduct } from './IProduct';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` - ${id}`;
    this.product = {
      'productId' : id,
      'productName' : 'Something',
      'productCode' : 'GUID123213',
      'releaseDate' : 'September 2, 2020',
      'description' : 'Something beautiful',
      'price' : 15.00,
      'starRating' : 2.6,
      'imageUrl' : 'assets/images/leaf_rake.png'
    }
  }

  onBack() : void {
    this.router.navigate(['/products']);
  }

}
