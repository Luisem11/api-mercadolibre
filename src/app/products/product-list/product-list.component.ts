import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  name: string;
  loading: boolean = true;
  constructor(private productsService: ProductsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['productName'];
      console.log(this.name);
      this.productsService.searchProduct(this.name).subscribe(res => {
        this.products = res['results'];
        if (this.products.length === 0) {
          this.products = undefined;
        }
        console.log(this.products);
        this.loading = false;
      });
    });
  }

}
