import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = [];
  pictures: any;
  constructor(private route: ActivatedRoute, private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.productsService.getDetails(params['id'])
          .subscribe(
            res => {
              this.product = res;
              console.log('-----', this.product['pictures']);
              this.pictures = this.product['pictures']
            });
      });
  }

}
