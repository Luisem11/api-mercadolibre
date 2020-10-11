import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  seeDetail() {
    this.router.navigateByUrl('/' + this.product['id'], { state: this.product });
  }

}
