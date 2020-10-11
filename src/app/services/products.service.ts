import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }


  searchProduct(name) {
    return this.http.get('https://api.mercadolibre.com/sites/MCO/search?q=' + name + '&limit=20');
  }

  getDetails(id) {
    return this.http.get('https://api.mercadolibre.com/items/' + id);
  }

}
